import React from 'react'
import { Button } from '@mui/material'
import miya from '/3d-img.webp'
function IstalganNuqta() {
    return (
        <div className='w-full bg-blue-500 h-[400px] my-12 flex'>
            <div className='container flex justify-between items-center'>
                <div className='flex flex-col gap-4 max-w-[700px]'>
                    <h1 className='text-5xl font-bold'>Istalgan nuqtadan onlayn o’qish imkoniyati</h1>
                    <p className='text-[20px]'>Biz sizga bu imkoniyatni taqdim qilamiz</p>
                    <Button variant='outlined' sx={{ color: 'black', bgcolor: 'white', fontWeight: 800, paddingY: 1, paddingX: 3, marginTop:2, maxWidth:200, borderRadius:2 }}>Ro'yxatdan o'tish</Button>

                </div>
                <img src={miya} alt="" className='max-w-[300px]' />
            </div>
        </div>
    )
}

export default IstalganNuqta