import React, { useEffect } from 'react';

function Hello() {
    useEffect(() => {
        console.log("hi :)");
        return () => console.log("bye :(");
    }, []);
    return <h1>Hello</h1>;
}

//rsf
function Cleanup(props) {
    const [showing, setShowing] = React.useState(false);
    const onClick = () => setShowing(prev => !prev);
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default Cleanup;