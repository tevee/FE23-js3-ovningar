import C from "./C";
import D from "./D";

export default function B() {

  return(
    <div className="b">
      <strong>Component B</strong>
      <div className="b-wrapper">
        <C/>
        <D/>
      </div>
    </div>
  )
}