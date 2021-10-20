import Item from "./Item/Item";

import styles from "./Items.module.css";

interface Props {
  items: Item[];
}

const Items: React.FC<Props> = (props) => {
  const itemMap = props.items.map((item) => {
    return (
      <div key={item.id}>
        <Item
          id={item.id}
          product={item.product}
          manufacturer={item.manufacturer}
          device_type={item.device_type}
          serial={item.serial}
          condition={item.condition}
          year={item.year}
        ></Item>
      </div>
    );
  });
  return (
    <div className={styles["Items"]}>
      <div className={styles["Items-Header"]}>
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
                    stroke: "white",
                    strokeWidth: "2.08px",
                  }}
                />
              </g>
            </g>
          </g>
        </svg>
        <span>PRODUCT</span>
        <span>MANUFACTURER</span>
        <span>DEVICE TYPE</span>
        <span>SERIAL</span>
        <span>CONDITION</span>
        <span>YEAR</span>
      </div>
      {itemMap}
    </div>
  );
};

export default Items;
