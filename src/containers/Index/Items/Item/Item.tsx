import styles from "./Item.module.css";

const Item: React.FC<Item> = (props) => {
  return (
    <div className={styles["Item"]}>
      <svg
        width="19px"
        height="19px"
        viewBox="0 0 22 22"
        version="1.1"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      >
        <g transform="matrix(1,0,0,1,-368.281,-200.83)">
          <g transform="matrix(1,0,0,1,79.3971,0)">
            <g transform="matrix(1,0,0,1,-75.1024,0)">
              <path
                d="M384.454,206.728C384.454,204.048 382.278,201.872 379.598,201.872L369.885,201.872C367.204,201.872 365.028,204.048 365.028,206.728L365.028,216.441C365.028,219.121 367.204,221.298 369.885,221.298L379.598,221.298C382.278,221.298 384.454,219.121 384.454,216.441L384.454,206.728Z"
                style={{
                  fill: "none",
                  stroke: "#9c9b9a",
                  strokeWidth: "2.08px",
                }}
              />
            </g>
          </g>
        </g>
      </svg>
      <p>{props.product}</p>
      <p>{props.manufacturer}</p>
      <p>{props.device_type}</p>
      <p>{props.serial}</p>
      <p>{props.condition}</p>
      <p>{props.year}</p>
    </div>
  );
};

export default Item;
