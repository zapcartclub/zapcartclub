const WHATSAPP="917984679631";
const products=[
["Mini Electric Chopper","Electric Kitchen","₹599","₹999","🔪"],
["Portable Mini Juicer","Electric Kitchen","₹699","₹1,199","🥤"],
["Rechargeable Milk Frother","Kitchen Gadget","₹299","₹499","☕"],
["Electric Coffee Grinder","Kitchen Gadget","₹899","₹1,499","⚙️"],
["USB Electric Lighter","Viral Gadget","₹349","₹599","🔥"],
["Mini Portable Fan","Smart Gadget","₹399","₹699","🌀"],
["Digital Kitchen Scale","Kitchen Gadget","₹349","₹599","⚖️"],
["Automatic Soap Dispenser","Smart Home","₹699","₹1,099","🧼"],
["Motion Sensor Night Light","Smart Home","₹299","₹499","💡"],
["Mini Electric Cleaning Brush","Smart Home","₹449","₹799","🧹"],
["Portable Blender Bottle","Electric Kitchen","₹799","₹1,299","🥤"],
["Vegetable Cutter & Slicer","Kitchen Tool","₹399","₹699","🥕"],
["Oil Spray Bottle","Kitchen Tool","₹249","₹399","🫗"],
["Air Fryer Accessory Set","Kitchen Tool","₹349","₹599","🍟"],
["LED Digital Alarm Clock","Smart Gadget","₹499","₹799","⏰"],
["3-in-1 Charging Cable","Mobile Gadget","₹199","₹349","🔌"],
["Foldable Mobile Stand","Mobile Gadget","₹179","₹299","📱"],
["Mini Bluetooth Speaker","Smart Gadget","₹599","₹999","🔊"],
["Rechargeable Torch","Smart Gadget","₹399","₹699","🔦"],
["Electric Egg Boiler","Electric Kitchen","₹799","₹1,199","🥚"],
["Mini Waffle Maker","Electric Kitchen","₹1,099","₹1,699","🧇"],
["Portable Handheld Vacuum","Smart Gadget","₹899","₹1,499","🧹"],
["Multi-function Kitchen Scissors","Kitchen Tool","₹229","₹399","✂️"],
["Phone Cleaning Kit","Mobile Gadget","₹179","₹299","🧽"],["IBS 4K Action Camera", "Smart Gadget", "₹1,599", "₹3,999", "📷"],
 
];
let active="All";
const cats=["All",...new Set(products.map(p=>p[1]))];
function openWA(message){window.open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(message),"_blank")}
function drawCats(){document.getElementById("cats").innerHTML=cats.map(c=>`<button class="cat ${c===active?"active":""}" onclick="setCat('${c}')">${c}</button>`).join("")}
function setCat(c){active=c;drawCats();render()}
function render(){
 const q=document.getElementById("search").value.toLowerCase();
 const list=products.filter(p=>(active==="All"||p[1]===active)&&p[0].toLowerCase().includes(q));
 document.getElementById("grid").innerHTML=list.map(p=>`<article class="product"><div class="photo">${p[4]}</div><div class="info"><span class="tag">${p[1]}</span><h3>${p[0]}</h3><div class="price">${p[2]}<span class="old">${p[3]}</span></div><a class="order" href="javascript:openWA('Hello ZAPCARTCLUB, I want to order ${p[0]} at ${p[2]}. Please confirm availability, delivery charges and payment details.')">⚡ Order on WhatsApp</a></div></article>`).join("")
}
document.getElementById("search").addEventListener("input",render);
document.getElementById("year").textContent=new Date().getFullYear();
drawCats();render();
