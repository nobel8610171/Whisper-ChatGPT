import '../App.css';
import React from "react";
import { AudioRecorder } from 'react-audio-voice-recorder';
import axios from "axios";
import { useEffect, useState, useRef } from "react";

import Chat from '../components/Chat';

const MessageRoomPage = ({apiKey}) => {

    const [audios, setAudios] = useState([]);
    const [transcriptions, setTranscriptions] = useState([]);
    const [translations, setTranslations] = useState([]);
    const [chats, setChats] = useState([]);
    const [audioClickAble, setAudioClickAble] = useState(false);

    const whisperModel = "whisper-1";
    const chatgptModel = "gpt-3.5-turbo";
    const urlForWhisper = "https://api.openai.com/v1/audio/transcriptions";
    const urlForChatgpt = "https://api.openai.com/v1/chat/completions";

    const sendAudioRequest = async function (blob) {      
        try{
            const headers = {
                "content-type":  "multipart/form-data",
                "Authorization": `Bearer ${apiKey}`
            //   "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
            };    
            const formData = new FormData();
            formData.append("file", blob , "audio.mp3")
            formData.append("model", whisperModel)
            
            const response = await axios.post(urlForWhisper, formData, { "headers":headers })
            const transcription = response.data.text;    
            return transcription
        }
        catch (error){
            console.log(error);
        }
    }

    async function sendTranslationRequest (transcription) {
        try{
            const headers = {
                "content-type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            };
            const messages = [
                    {"role": "system", "content": "Translate from English to Traditional Chinese"},
                    {"role": "user", "content": transcription}
                ]
            const jsonData = {messages: messages, model: chatgptModel}
            const response = await axios.post(urlForChatgpt, jsonData, { headers:headers })
            
            const translation = response.data.choices[0].message.content
            return translation;
        }
        catch (error) {
            console.log(error);
        }
    }

    async function sendChatRequest(translation) {
        try {
            const headers = {
                "content-type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            };
            const messages = [
                    {"role": "system", "content": "你是一個診前問診系統，病人會跟你說他目前的身體狀況，病人通常會跟你講以下幾件事情:\n\n發病：什麼時候開始注意到有症狀產生？誘發原因：症狀開始出現的時間點附近，病人在什麼環境做了哪些事情？性質：症狀出現時的感覺、症狀的特徵症狀散布：出現症狀的部位是否改變、或者隨著身體的移動而有變化？嚴重程度：症狀何時最嚴重？有多嚴重？\n\n請你利用獲得的訊息，來建立看診目標，可以從提出開放式的問題開始，如果上述關於發病、誘發原因、性質、症狀散布、嚴重程度有不清楚的地方，也可以請病人回答，然後觀察病人的回覆，並給出建議。"},
                ]

            console.log(translations)
            // Multi-turn chats
            // FIXME: setState() is async, so the translations here are not updated,
            //        so constraint should be translations.length 
            //        to including the last translation
            for (let i = 0; i < translations.length; i ++){
                messages.push({"role": "user", "content": translations[i]});
                messages.push({"role": "assistant", "content": chats[i]});
            }
            messages.push({"role": "user", "content": translation});

            const jsonData = {messages: messages, model: chatgptModel}
            const response = await axios.post(urlForChatgpt, jsonData, {headers: headers} )
            const chat = response.data.choices[0].message.content
            return chat;
        }
        catch (error){
            console.log(error)
        }
    }

    async function sendRequests (audioUrl, audioBlob){
        const transcription = await sendAudioRequest(audioBlob);
        setTranscriptions([...transcriptions, transcription]);

        const translation = await sendTranslationRequest(transcription);
        setTranslations([...translations, translation])

        const chat = await sendChatRequest(translation);
        setChats([...chats, chat])
    }

    const addAudioElement = async function (audioBlob) {
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudios([...audios, audioUrl]);

        // enforce the length of three lists are equal
        setTranscriptions([...transcriptions, null]);
        setTranslations([...translations, null]);
        setChats([...chats, null]);

        await sendRequests(audioUrl, audioBlob);
    };

    const resetConversation = () => {
        setAudios([]);
        setTranscriptions([]);
        setTranslations([]);
        setChats([]);
    }

    return (
        <div className="App" style={{marginTop:"30px"}}>
            <div className='msg-container'>
              {
              audios.map((audio, index)=> (
                <Chat key={index} audio={audios[index]} transcription={transcriptions[index]} 
                        translation={translations[index]} chat={chats[index]}/>
              ))
              }
            </div>
            <div className='bottom-line'></div>
            <div className='bottom-line-button'>
                <AudioRecorder onRecordingComplete={addAudioElement}/>
                <button className='circle-button' disabled={false}  onClick={resetConversation}>
                    <ion-icon name="trash" style={{fontSize: "17px"}}></ion-icon>
                </button>
            </div>
        </div>
    );
}

export default MessageRoomPage;
