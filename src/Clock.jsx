import React, { useEffect, useRef, useState} from 'react'

const Clock = (props) => {
  const [state, setState] = useState({date: new Date()})
  const intervalRef = useRef()

  const tick = () => {
    console.info('Function tick called', ['tick']);
    setState({date: new Date()});
  }

  // componentDidMount
  useEffect(() => {
    const id = setInterval(() => tick(), 1000);
    console.info('Component Mounted', ['componentDidMount', id]);
    intervalRef.current = id;
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.info('Component Updated', ['componentDidUpdate']);
  }, [state]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.info('Component Unmounted', ['componentWillUnmount']);
      clearInterval(intervalRef.current);
    }
  }, []);
  
  /*   
    shouldComponentUpdate: Não se aplica, mas daria para usar o memo
  */

  console.info('Component Rendered', ['render']);
  return (
    <div>
      {<h1>{state.date.toLocaleTimeString()}</h1> }
    </div>
  )
}

export default Clock