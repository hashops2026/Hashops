import { useState } from "react";
export default function HashOps() {
  const [step, setStep] = useState(0);
  return (
    <div style={{background:"#0a0a0a",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace",color:"#c8a96e"}}>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:36,fontWeight:700,letterSpacing:4,marginBottom:16}}>HASHOPS</div>
        <div style={{fontSize:14,color:"#555",marginBottom:24}}>OPERATIONS SYSTEM</div>
        <button onClick={()=>setStep(s=>s+1)} style={{background:"#1a2a1a",border:"1px solid #2a6a4a",color:"#4ada8a",padding:"12px 24px",borderRadius:6,cursor:"pointer",fontFamily:"monospace",fontSize:14}}>
          {step===0?"Launch App":"Clicked "+step+" times"}
        </button>
      </div>
    </div>
  );
}
