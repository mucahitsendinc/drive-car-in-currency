import styled from "styled-components";

const Kaporta=styled.div`
  position:relative;
  width:230px;
  height:125px;
  margin-top:50px;
  margin-left:50px;
`

const Kaput=styled.div`
  position:absolute;
  background-color:${(props)=>props.color};
  height:75px;
  width:70px;
  border-top-right-radius:10px;
  right:0;bottom:0;
`

const Govde=styled.div`
  position:absolute;
  background-color:${(props)=>props.color};
  height:135px;
  border-top-right-radius:10px;
  border-top-left-radius:10px;
  width:150px;
  right:70px;bottom:0;
  display:flex;
  flex-wrap:wrap;
`

const Pencere=styled.div`
  margin-top:10px;
  margin-left:10px;
  border-radius:4px;
  top:10px;
  right:10px;
  height:50px;width:60px;
  background-color:${(props)=>props.color};
`

const Stepne=styled.div`
  position:absolute;
  bottom:30px;
  right:220px;
  width:10px;
  height:65px;
  background-color:${(props)=>props.color};
`

const Teker=styled.div`
  position:absolute;
  width:65px;
  height:65px;
  border-radius:45px;
  background-color:${(props)=>props.color};
  bottom:-25px;
  z-index:1;
  right:${(props)=>props.right}px;
`


const Jant=styled.div`
  position:absolute;
  background-color:${(props)=>props.color};
  border-radius:100%;
  left:12.5px;
  top:12.5px;
  width:40px;
  height:40px;
`

const JantIzgara=styled.div`
  position:absolute;
  transition:999300ms all;
  height:40px;
  width:3px;
  right:20px;
  transform:rotate(${(props)=>props.deg}deg);
  top:0px;
  background-color:${(props)=>props.color};
`

const HavaFiltresi=styled.div`
  position:absolute;
  width:35px;
  height:7px;
  background-color:${(props)=>props.color};
  top:-6px;
  left:15px;
`

const Egzoz=styled.div`
  position:absolute;
  width:20px;
  height:10px;
  background-color:${(props)=>props.color};
  bottom:0px;
  z-index:-1;
  left:-10px;
`


export { 
    Kaporta,
    Kaput,
    Govde,
    Pencere,
    Stepne,
    Teker,
    Jant,
    JantIzgara,
    HavaFiltresi,
    Egzoz,
  }