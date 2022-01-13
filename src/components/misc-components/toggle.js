import { useState } from "react";


function Toggleswitch(props){

    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);

    return (
        <>
        
                                       
                               

                                    <label className="toggle-switch">
                                        <input type="checkbox" checked={isToggled} onChange={onToggle} />
                                        <span className="switch" />
                                    </label>


        </>
    )
}
export default Toggleswitch;