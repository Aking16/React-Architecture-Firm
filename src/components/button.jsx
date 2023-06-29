import { arrowUp } from "../assets";

const button = () => (
  <div className="flex flex-row items-center">
    <p className="me-5 text-primary">View projects</p>
    <div className="flex bg-secondary p-5 rounded-full border border-white">
      <img src={arrowUp} />
    </div>
  </div>
);

export default button;
