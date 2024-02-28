import { View, Text, Button } from 'react-native'
import React from 'react'

const Contador = () => {
    const [Contador, setContador] = useState(1)
    
    function incrementar () {
        setContador(Contador + 1)
    }

    function Decrementar () {
        setContador (Contador -1 )
    }



  return (
    <View>
        
      <Button  title='Incrementar' onPress={incrementar}/>

        <Button title='Decrementar' onPress={Decrementar} />

    </View>
  )
}

export default Exercicio02