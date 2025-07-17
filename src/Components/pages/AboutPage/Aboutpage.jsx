import React from "react";
import About from "../Home/about/About"; 
import "./Aboutpage.css"; 

const qualityData = [
  {
    label: "Cloth Quality",
    icon: "👕",
    value: 98,
    color: "#F47C65", 
    clothdescription:"Our apparel is crafted with precision-focused fittings that bring comfort, fashion, and a flattering shape for all body types. Every garment undergoes thorough fit evaluations and size grading to ensure reliable sizing across collections. By refining every cut, flow, and form, we ensure each piece not only looks stylish but fits well—delivering comfort, flexibility, and confidence in every look. Whether tailored or relaxed, our priority remains effortless wearability and modern style.",
  },
  {
    label: "Color",
    icon: "🎨",
    value: 98,
    color: "#FDD835", 
    clothdescription:"We emphasize vivid, enduring color in all our garments. Using premium, eco-conscious dyes, our fabrics hold their vibrancy and resist fading through repeated washing. Each shade is rigorously tested for uniformity, richness, and durability, aligning perfectly with the design’s vision while standing up to everyday wear. Whether you prefer bold tones or soft neutrals, our color selection is curated to align with current trends while maintaining fabric strength and appeal over time.",
  },
  {
    label: "Fittings",
    icon: "📏",
    value: 100,
    color: "#6A1B9A", 
    clothdescription:"At our manufacturing unit, excellence is embedded into every fiber. We select superior-quality fabrics from reputable partners to ensure strength, comfort, and color retention. Every item goes through strict quality assurance—from raw fabric inspection to precision in every seam—ensuring uniformity and top-tier results. From cotton to linen, denim, or blends, our textiles feel gentle on the skin, breathe well, and meet global quality expectations.",
  },
];

const ProductQualityBars = () => {
  return (
  <div className="container">
      <div className="quality-bar-container">
      {qualityData.map((item, index) => (
        <div className="quality-item" key={index}>
          <div className="bar-wrapper">
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.color,
                }}
              />
              <div
                className="bar-badge"
                style={{
                  left: `calc(${item.value}% - 40px)`,
                  backgroundColor: item.color,
                }}
              >
                {item.value}%
              </div>
              <div
                className="bar-dot"
                style={{
                  left: `calc(${item.value}% - 6px)`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
          <div
            className="bar-label"
            style={{ color: item.color }}
          >
            <span className="bar-icon">{item.icon}</span> 
            <p>{item.label}</p>
            <p>{item.clothdescription}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

const Aboutpage = () => {
  return (
    <>
    
  
      {/* Reused About section from Home */}
      <About />
    {/* Product Quality Bars */}
    <ProductQualityBars />
    </>
  );
};

export default Aboutpage;
