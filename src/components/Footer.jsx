import React from 'react'
import logoSite from "/logo-dark (1).svg";
import darkLogo from '/logo.svg'
import { Link } from 'react-router-dom';
import { useColorScheme } from '@mui/material';
import {Button } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

function Footer() {

    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }
    const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

    return (
        <div className='container flex flex-col gap-4 justify-between items-center mt-[100px] border-b-[1px] border-white pb-10 mb-8'>
            <Link to="/" className="shrink-0">
                {mode === 'light' ? <img src={logoSite} alt="logo" className="h-8 w-auto" /> :
                    <img src={darkLogo} alt="logo" className="h-8 w-auto" />
                }
            </Link>
            <h1 className='text-3xl mt-6 font-bold'>Biz bilan muvaffaqiyatga erishing</h1>
            <p className='text-[20px] text-gray-500'>Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>
            <div className='flex gap-3'>
                <Button variant='outlined' className='border flex gap-3'><SlowMotionVideoIcon sx={{width:18, height:18}}/>Intro Video</Button>
                <Button variant='contained'>Bog'lanish</Button>
            </div>
        </div>
    )
}

export default Footer