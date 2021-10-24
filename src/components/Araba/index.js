import React, {useState,useEffect} from 'react'
import {
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
} from './styles/ArabaStyle'


export function Araba(props) {

  const [hiz,setHiz]=useState(0)

  const {
    anaGovde,
    onTekerlek,
    arkaTekerlek,
    onJant,
    arkaJant,
    onFren,
    arkaFren,
    kaput,
    havaFiltresi,
    onCam,
    arkaCam,
    stepne,
    egzoz
  } = props.color

  useEffect(() => {
    /*setTimeout(() => {
      setHiz(hiz+30)
    }, 0);*/
   
  }, [hiz])

  return (
    <Kaporta>
      
      <Kaput color={kaput ?? '#333'}>
        <HavaFiltresi color={havaFiltresi ?? '#333'}/>
      </Kaput>
      
      <Teker right={5} color={onTekerlek ?? '#333'}>
        <Jant color={onJant ?? '#333'}>
          <JantIzgara color={onFren ?? '#333'} deg={hiz} />
          <JantIzgara color={onFren ?? '#333'} deg={hiz+90} />
          <JantIzgara color={onFren ?? '#333'} deg={hiz+30} />
          <JantIzgara color={onFren ?? '#333'} deg={hiz+60} />
          <JantIzgara color={onFren ?? '#333'} deg={hiz+120} />
          <JantIzgara color={onFren ?? '#333'} deg={hiz+150} />
        </Jant>
      </Teker>
      
      <Govde color={anaGovde ?? '#333'}>
        <Pencere color={onCam ?? '#333'}/>
        <Pencere color={arkaCam ?? '#333'}/>
      </Govde>

      <Teker right={150} color={arkaTekerlek ?? '#333'}>
        <Jant color={arkaJant ?? '#333'}>
          <JantIzgara color={arkaFren ?? '#333'} deg={hiz} />
          <JantIzgara color={arkaFren ?? '#333'} deg={hiz+90} />
          <JantIzgara color={arkaFren ?? '#333'} deg={hiz+30} />
          <JantIzgara color={arkaFren ?? '#333'} deg={hiz+60} />
          <JantIzgara color={arkaFren ?? '#333'} deg={hiz+120} />
          <JantIzgara color={arkaFren ?? '#333'} deg={hiz+150} />
        </Jant>
      </Teker>

      <Stepne color={stepne ?? '#333'}/>

      <Egzoz color={egzoz ?? '#333'}/>

    </Kaporta>
  )
}
