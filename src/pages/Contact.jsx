import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <div className='container'>
      <div>
        <p className='text-blue-600'>Bog'lanish</p>
        <h1 className='text-4xl font-bold'>Savollaringiz bo'lsa murojaat qiling</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {/* Phone */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm ring-1 ring-gray-200/50 dark:ring-white/10">
            <div className="flex flex-col gap-5 p-8">
              <PhoneInTalkIcon
                sx={{
                  backgroundColor: "#2563eb",
                  borderRadius: 8,
                  padding: 1,
                  width: 40,
                  height: 40,
                  color: "white",
                }}
              />
              <h4 className="font-semibold text-lg">Telefon</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                +998 (90) 166 27 14
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm ring-1 ring-gray-200/50 dark:ring-white/10">
            <div className="flex flex-col gap-5 p-8">
              <EmailIcon
                sx={{
                  backgroundColor: "#2563eb",
                  borderRadius: 8,
                  padding: 1,
                  width: 40,
                  height: 40,
                  color: "white",
                }}
              />
              <h4 className="font-semibold text-lg">Elektron Pochta</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                ergashevboburmirzo815@gmail.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm ring-1 ring-gray-200/50 dark:ring-white/10">
            <div className="flex flex-col gap-5 p-8">
              <LocationOnIcon
                sx={{
                  backgroundColor: "#2563eb",
                  borderRadius: 8,
                  padding: 1,
                  width: 40,
                  height: 40,
                  color: "white",
                }}
              />
              <h4 className="font-semibold text-lg">Manzil</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Farg'ona vil, Farg'ona sh, Qirguli mavze, Yangi asr ko'chasi, 104-B-uy,
                19-xonadon
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact