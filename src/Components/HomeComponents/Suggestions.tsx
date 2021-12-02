import React from "react";
import buttler from "../../Images/buttler.jpg";

function Suggestions() {
  const Suggest = () => {
    return (
      <div>
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "10px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={buttler}
            alt="buttler"
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />
          <div
            style={{
              width: "400px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginLeft: "20px",
              }}
            >
              <span>Alla Srinivasulu</span>
              <br />
              <span>Srinivasulualla</span>
            </div>
            <span style={{ color: "blue" }}>Follow</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        position: "sticky",
        top: 10,
        height: 600,
      }}
    >
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={buttler}
          alt="buttler"
          style={{ width: "70px", height: "70px", borderRadius: "50%" }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              marginLeft: "20px",
            }}
          >
            <span>Alla Srinivasulu</span>
            <br />
            <span>Srinivasulualla</span>
          </div>
          <span style={{ color: "blue" }}>Switch</span>
        </div>
      </div>
      <div>
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "gray" }}>Suggestions for you</span>
          <span>See All</span>
        </div>
      </div>
      {Array(2)
        .fill(" ")
        .map((_, i) => (
          <Suggest />
        ))}
    </div>
  );
}

export default Suggestions;
