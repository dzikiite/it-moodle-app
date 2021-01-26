import React, { useState } from 'react';
import { storage } from '../firebase';

import NavBar from '../components/NavBar';
import Header from '../components/Header';

const UploadPage = () => {
    const [ fullName, setFullName ] = useState('');
    const [ taskName, setTaskName ] = useState('');
    const [ error, setError ] = useState('');
    const [ file, setFile ] = useState(null);
    const [ downloadURL, setDownloadURL ] = useState('');

    const handleChange = e => {
        if (e.target.name === 'full-name') {
            setFullName(e.target.value);
        } else if (e.target.name === 'task-name') {
            setTaskName(e.target.value) 
        }
    }

    const handleSelectFile = e => {
        setError('');

        if (e.target.files[0].size > 10000000) {
            setError('Rozmiar pliku jest za duży');
        } else {
            setFile(e.target.files[0]);
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');

        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);

        try {
            await fileRef.put(file);
            const link = await fileRef.getDownloadURL();
            setDownloadURL(link);
            setFullName('');
            setTaskName('');
            setFile(null);
            setError('Zadanie zostało wysłane!');
        } catch(err) {
            setError('Coś poszło nie tak z wysyłaniem pliku, spróbuj ponownie później');
        }
    }

    return ( 
        <div>
            <NavBar />
            <Header name="Prześlij zadanie" />
            <div className="flex h-full justify-center items-center my-14 flex-col">
                <h2 className="m-6 text-center text-2xl font-bold text-gray-900">Dodaj swoje zadanie</h2>
                <p className="py-1">Możesz przesłać tylko jeden plik, nie przekraczający 10MB. Preferowany format to zip.</p>
                <form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-7 p-8 justify-center items-center shadow-md rounded-md">
                    <input 
                    value={fullName} 
                    onChange={handleChange} 
                    type="text" 
                    name="full-name" 
                    placeholder="Imię i nazwisko" 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                    <input 
                    value={taskName} 
                    onChange={handleChange} 
                    type="text" 
                    name="task-name" 
                    placeholder="Nazwa zadania" 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                    <div className="border border-dashed border-gray-500 relative">
                        <input 
                        type="file" 
                        onChange={handleSelectFile} 
                        className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" 
                        />
                        <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                            <h4>
                                Przeciągnij plik
                            <br/>lub
                            </h4>
                            <p className="">kliknij i wybierz go z dysku</p>
                        </div>
                    </div>
                    <p>{file ? <p>Wybrany plik: {file.name}</p> : null}</p>
                    <p className="text-red-600">{error ? error : null}</p>
                    <button 
                    type="submit" 
                    className="text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium"
                    >
                        Wyślij
                    </button>
                </form>
            </div>
        </div>
     );
}
 
export default UploadPage;