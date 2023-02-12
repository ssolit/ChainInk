import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// import { json } from 'stream/consumers'
import Upload from '../components/Upload'
import PaperSettings from '../components/PaperSettings'
import DownloadHelper from '../components/DownloadHelper'
import PublishModal from '../components/PublishModal';

export default function dashboard({ connected, setConnected }) {
    const [buttonClick, setButtonClick] = useState(false);
    const [settingsClick, setSettingsClick] = useState(false);
    const [publishModalIsOpen, setPublishModalIsOpen] = useState(false);

    const openPublishModal = () => {
        setPublishModalIsOpen(true);
    };

    const closePublishModal = () => {
        setPublishModalIsOpen(false);
    };
    const [settingsClickId, setSettingsClickId] = useState(null);
    const data_array = [
        {
            hash: 'hash 1',
            title: 'Swarm robotic exploration of rainforest canopies',
            author: 'Vijay Kumar',
            shared: ['address 1.1'],
            reviewed: 'Daniel Mellinger',
            url: 'https://url1.com',
            image: '/drone-tree.png',
        },
        {
            hash: 'hash 2',
            title: 'Randomized algorithms for distributed devices',
            author: 'ZP Zhong',
            shared: ['address 2.1'],
            reviewed: 'SK Wang',
            url: 'https://url2.com',
            image: '/randomized-alg.png',
        },
        {
            hash: 'hash 3',
            title: 'Glacial lake outburst floods: a review of the past 50 years',
            author: 'Nathan Katz',
            shared: ['address 3.1'],
            reviewed: 'John Cho',
            url: 'https://url3.com',
            image: '/glacial-lakes.png',
        },
        {
            hash: 'hash 4',
            title: 'Momentum trading disproved: backtest 12 years',
            author: 'Cliff Assness',
            shared: ['address 4.1'],
            reviewed: 'Gad Allon',
            url: 'https://url4.com',
            image: '/momentum-trading.png',
        },
    ];

    if (connected === false) {
        return (
            <div class='bg-[url(../public/Pen1.jpeg)] h-screen opacity-75 '>
                <p class='text-[72px] text-center align-middle mt-10'>
                    {' '}
                    Welcome to Inked!
                </p>
                <p class='text-[72px] text-center align-middle'>
                    {' '}
                    Please connect your Phantom wallet to continue.{' '}
                </p>
            </div>
        );
    } else {
        return (
            <div class='px-4 pt-12 pb-32 mx-auto max-w-screen-x1 sm:px-6 lg:px-8'>
                <div class='flex justify-evenly'>
                    <div>
                        <button class='bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded-none'>
                            My Papers
                        </button>
                    </div>
                    <div>
                        <button class='bg-gray-100 hover:bg-gray-400 text-slate-600 font-medium py-2 px-4 rounded-none'>
                            Shared With Me
                        </button>
                    </div>
                </div>
                <DownloadHelper />
                <div class='relative '>
                    <button
                        onClick={() => {
                            if (buttonClick === false) {
                                setButtonClick(true);
                            }
                        }}
                        class='bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-none'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
                            />
                        </svg>

                        <span>Upload</span>
                    </button>

                    {buttonClick && (
                        <Upload
                            buttonClick={buttonClick}
                            setButtonClick={setButtonClick}
                        />
                    )}
                </div>

                <div>
                    <div class='mt-8 grid grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-3 drop-shadow-lg'>
                        {data_array.map((item) => (
                            <div
                                class='bg-blue-100 rounded-t'
                                key={item['hash']}
                            >
                                <Image
                                    class='rounded-t-lg'
                                    src={item['image']}
                                    alt='papers image'
                                    width={500}
                                    height={500}
                                />
                                <div class='pt-4 mx-4'>
                                    <div className='flex flex-row justify-between'>
                                        <p class='text-lg font-semibold mb-2'>
                                            {' '}
                                            {item['title']}{' '}
                                        </p>
                                        <button
                                            onClick={() => {
                                                if (settingsClick === false) {
                                                    setSettingsClick(true);
                                                    setSettingsClickId(
                                                        item['hash']
                                                    );
                                                }
                                            }}
                                        >
                                            <svg
                                                fill='#000000'
                                                height='25px'
                                                width='25px'
                                                version='1.1'
                                                id='Capa_1'
                                                xmlns='http://www.w3.org/2000/svg'
                                                xmlnsXlink='http://www.w3.org/1999/xlink'
                                                viewBox='0 0 328.5 328.5'
                                                xmlSpace='preserve'
                                            >
                                                <g>
                                                    <g>
                                                        <polygon
                                                            points='96.333,150.918 96.333,135.918 55.667,135.918 55.667,95.251 40.667,95.251 40.667,135.918 0,135.918 0,150.918
				40.667,150.918 40.667,191.583 55.667,191.583 55.667,150.918 		'
                                                        />
                                                        <path
                                                            d='M259.383,185.941H145.858c-38.111,0-69.117,31.006-69.117,69.117v39.928H328.5v-39.928
				C328.5,216.948,297.494,185.941,259.383,185.941z M313.5,279.987H91.741v-24.928c0-29.84,24.276-54.117,54.117-54.117h113.524
				c29.84,0,54.117,24.277,54.117,54.117L313.5,279.987L313.5,279.987z'
                                                        />
                                                        <path
                                                            d='M202.621,178.84c40.066,0,72.662-32.597,72.662-72.663s-32.596-72.663-72.662-72.663s-72.663,32.596-72.663,72.663
				S162.555,178.84,202.621,178.84z M202.621,48.515c31.795,0,57.662,25.867,57.662,57.663s-25.867,57.663-57.662,57.663
				c-31.796,0-57.663-25.868-57.663-57.663S170.825,48.515,202.621,48.515z'
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                        <button
                                            className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ml-6'
                                            id='publishButton'
                                            onClick={() => {
                                                if (
                                                    publishModalIsOpen === false
                                                ) {
                                                    setPublishModalIsOpen(true);
                                                    setSettingsClickId(
                                                        item['hash']
                                                    );
                                                }
                                            }}
                                        >
                                            Publish
                                        </button>
                                        {settingsClick && (
                                            <PaperSettings
                                                key={item['hash']}
                                                buttonClick={settingsClick}
                                                setButtonClick={
                                                    setSettingsClick
                                                }
                                                item={item}
                                                settingsClickId={
                                                    settingsClickId
                                                }
                                                setSettingsClickId={
                                                    setSettingsClickId
                                                }
                                            />
                                        )}
                                        {publishModalIsOpen && (
                                            <PublishModal
                                                key={item['hash']}
                                                buttonClick={publishModalIsOpen}
                                                setButtonClick={
                                                    setPublishModalIsOpen
                                                }
                                                item={item}
                                                settingsClickId={
                                                    settingsClickId
                                                }
                                                setSettingsClickId={
                                                    setSettingsClickId
                                                }
                                                // pass in the name of the title of the paper
                                                privatePaperTitle={
                                                    item['title']
                                                }
                                            />
                                        )}
                                    </div>

                                    <p class='text-sm font-medium'>
                                        Author: {item['author']}
                                    </p>
                                    <p class='text-sm font-medium'>
                                        Shared With: {item['shared']}
                                    </p>
                                    <div class='text-center text-xs p-1 bg-gray-100 rounded-full w-3/4 mt-2 mb-2'>
                                        Peer Reviewed By: {item['reviewed']}
                                    </div>
                                </div>
                                <Link href={item['url']}>
                                    <p className='text-bg-gray-300 hover:text-cyan-600 text-xs text-right underline transition hover:decoration-blue-400 m-1'>
                                        Open In Explorer
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
