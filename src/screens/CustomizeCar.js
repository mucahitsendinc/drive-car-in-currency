import React,{useState} from 'react'
import styled from 'styled-components'
import {Araba} from '../components/Araba' 
import InputColor from 'react-input-color';

const FullContainer=styled.div`
  width:100vw;
  height:100vh;
  overflow:hidden;
  position:fixed;
  top:0;left:0;right:0;bottom:0;
  margin:0;padding:0;
  .colorSelectors{
    display:flex;
    flex-wrap:wrap;
    label{
      display:flex;
      width:200px;
      height:40px;
      font-weight:bold;
      margin:20px;
      background-color:#eee;
      align-items:center;
      padding-left:10px;
      position:relative;
      right:0;
      &
      &:hover{
        background-color:#ddd;
      }
      span{
        position:absolute;
        right:10px;
        top:2.5px;
        border-radius:100%;
        height:30px;width:30px;
        border:0px!important;outline:0;background-color:transparent;
        transition:600ms all;
        &:hover{
          transform:scale(1.05);
        }
      }
      
    }
  }
`


export default function CustomizeCar() {
  const [anaGovde, setAnaGovde] = useState(null);
  const [onTekerlek, setOnTekerlek] = useState(null);
  const [arkaTekerlek, setArkaTekerlek] = useState(null);
  const [onJant, setOnJant] = useState(null);
  const [arkaJant, setArkaJant] = useState(null);
  const [onFren, setOnFren] = useState(null);
  const [arkaFren, setArkaFren] = useState(null);
  const [kaput, setKaput] = useState(null);
  const [havaFiltresi, setHavaFiltresi] = useState(null);
  const [onCam, setOnCam] = useState(null);
  const [arkaCam, setArkaCam] = useState(null);
  const [stepne, setStepne] = useState(null);
  const [egzoz, setEgzoz] = useState(null);

  return (
  <FullContainer>
    <div className="colorSelectors">
      <label>
        Ana Gövde : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setAnaGovde(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Ön Tekerlek : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setOnTekerlek(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Ön Jant : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setOnJant(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Ön Fren : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setOnFren(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Arka Tekerlek : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setArkaTekerlek(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Arka Jant : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setArkaJant(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Arka Fren : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setArkaFren(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Kaput : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setKaput(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Hava Filtresi : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setHavaFiltresi(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Ön Cam : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setOnCam(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Arka Cam : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setArkaCam(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Stepne : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setStepne(e.rgba)}
          placement="right"
        />
      </label>
      <label>
        Egzoz : 
        <InputColor
          initialValue="#333"
          onChange={(e)=>setEgzoz(e.rgba)}
          placement="right"
        />
      </label>
    </div>

    <Araba color={{
      anaGovde:anaGovde,
      onTekerlek:onTekerlek,
      arkaTekerlek:arkaTekerlek,
      onJant:onJant,
      arkaJant:arkaJant,
      onFren:onFren,
      arkaFren:arkaFren,
      kaput:kaput,
      havaFiltresi:havaFiltresi,
      onCam:onCam,
      arkaCam:arkaCam,
      stepne:stepne,
      egzoz:egzoz
      }} />

  </FullContainer>

  )
}
