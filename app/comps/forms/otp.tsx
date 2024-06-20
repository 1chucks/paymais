import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export function AppOtpInput() {
  const [otp, setOtp] = useState('');

  return (
    <div className={`w-full mt-4 flex items-center justify-center`}>
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props}/>}
      containerStyle={{width:"100%", 
        display:"flex",alignItems:"center",justifyContent:"center", color:"pink"}}
        inputStyle={{padding:"20px", border:"1px #EBEBFF solid", color:"pink"}}
    />
    </div>
  );
}