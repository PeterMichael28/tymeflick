import OtpInput from 'react-otp-input'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmSmallBusinessEmail = () => {
  const [otp, setOtp] = useState('')
  const [time, setTime] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const navigate = useNavigate()

  // Automatically verify OTP when fully filled
  useEffect(() => {
    if (otp.length === 4) {
      handleVerify()
    }
  }, [otp])

  const handleVerify = () => {
    console.log('Entered OTP:', otp)
    // Call your API to verify OTP here
    navigate('/')
  }

  const handleResend = () => {
    console.log('Resend OTP')
    setOtp('')
    setTime(60)
    setCanResend(false)
    // Trigger your API to resend OTP here
  }

  useEffect(() => {
    if (time <= 0) {
      setCanResend(true)
      return
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [time])

  // Format timer as MM:SS
  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${min}:${sec < 10 ? '0' : ''}${sec}`
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-officeBrow font-bricolage text-[26px] font-bold">
          Confirm your email
        </p>
        <p className="text-officeBrow font-bricolage text-[16px] font-normal">
          We sent an email to
        </p>
        <p className="text-officeBrow font-bricolage text-[16px] font-normal">
          example@gmail.com
        </p>
      </div>

      <div className="flex w-full items-center justify-center">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="mx-3"></span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{ width: '55px', height: '70px', textAlign: 'center' }}
              className="rounded-md border border-gray-300 text-lg focus:outline-[#1FC16B]"
              disabled={canResend}
            />
          )}
        />
      </div>

      <div className="text-officeBrow700 flex gap-2 text-[17px] font-normal">
        <p>Code expires in: </p>
        <p className="text-[#D00416]">{formatTime(time)}</p>
      </div>

      <div className="text-officeBrow700 flex gap-2 text-[17px] font-normal">
        <p>Did not get code?</p>
        <button
          onClick={handleResend}
          disabled={!canResend}
          className={`font-bold ${canResend ? 'text-primary underline' : 'text-gray-400'}`}
        >
          Retry
        </button>
      </div>
    </div>
  )
}

export default ConfirmSmallBusinessEmail
