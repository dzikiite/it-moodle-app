import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { cmsData } from '../api/cms-data';
import { useHistory } from 'react-router-dom';

import LoadingSpinner from '../components/LoadingSpinner';


const TestTemplate = props => {
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ questionTimer, setQuestionTimer ] = useState(0);
    const [ answearValue, setAnswearValue ] = useState('');
    const [ answers, setAnswers ] = useState([]);
    const { loading, error, data } = useQuery(cmsData);
    const { slug } = props.match.params;
    const history = useHistory();

    useEffect(() => {
        if (!loading && data) {
            const questionIntervalId = setInterval(() => setCurrentQuestion(prevQuestion => prevQuestion + 1), answearTime);
            const timerIntervalId = setInterval(() => setQuestionTimer(prevTimer => prevTimer + 1), 1000);

            return () => {
                clearInterval(questionIntervalId);
                clearInterval(timerIntervalId);
            }
        }
    }, [loading, data]);

    if (loading) return <LoadingSpinner />;
    if (error) return `Error: ${error}`;

    const test = data.allTests.filter(test => test.testSlug === slug);
    const answearTime = test.map(test => test.answearTime * 12000);
    const testName = test.map(test => test.testName);

    const handleAnswearChange = e => {
        setAnswearValue(e.target.value);
    }

    const handleAnswerSubmit = (questionTitle) => {
        setAnswers([
            ...answers,
            { questionTitle, answearValue}
        ]); 
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
        setQuestionTimer(0);
        setAnswearValue('');
    }

    const handleTestSubmit = () => {
        history.push('/baza-wiedzy');
    }

    const testQuestion = test.map(test => {
        const { questions } = test;

        if (currentQuestion < questions.length) {
            return (
                <div 
                key={questions[currentQuestion].id}
                className="flex flex-col"
                >
                    <h2 
                    className="m-6 text-center text-2xl font-bold text-gray-900"
                    >
                        {questions[currentQuestion].questionTitle}
                    </h2>
                    <textarea 
                    value={answearValue}
                    onChange={handleAnswearChange}
                    placeholder="Wpisz odpowiedź..." 
                    />
                    <button 
                    className="text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white px-6 py-2 my-6 rounded-md text-sm font-medium"
                    onClick={() => handleAnswerSubmit(questions[currentQuestion].questionTitle)}
                    >
                        Zatwierdź
                    </button>
                    <p>{questionTimer} / {answearTime / 1000} sekund</p>
                </div>
            )
        } else {
            return (
                <div 
                key="1"
                className="flex flex-col"
                >
                    <h2 className="text-center">Test dobiegł końca</h2>
                    <button 
                    className="text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white px-6 py-2 my-6 rounded-md text-sm font-medium"
                    onClick={handleTestSubmit}
                    >
                        Wyślij odpowiedzi
                    </button>
                </div>
            )
        }   
    });
    
    return ( 
        <>
            <div className="flex flex-col justify-center items-center h-screen w-screen">
                <h2 className="m-6 text-center text-2xl font-bold text-gray-900">{testName}</h2>
                <div className="shadow p-20">
                    {testQuestion}
                </div>
            </div>
        </>
     );
}
 
export default TestTemplate;