(this.webpackJsonpcypherverse=this.webpackJsonpcypherverse||[]).push([[7],{107:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"tokenURIPrefix","type":"string"},{"internalType":"address","name":"signer","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"}],"name":"CreateERC1155_v1","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"recipients","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"bps","type":"uint256[]"}],"name":"SecondarySaleFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SignerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SignerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_value","type":"string"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"URI","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"creators","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"fees","outputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeBps","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeRecipients","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isSigner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"components":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ERC1155Base.Fee[]","name":"fees","type":"tuple[]"},{"internalType":"uint256","name":"supply","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"contractURI","type":"string"}],"name":"setContractURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"tokenURIPrefix","type":"string"}],"name":"setTokenURIPrefix","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')},113:function(e,n){},176:function(e,n,t){"use strict";t.r(n);var a,i,r,s,o,l,p,c,d,u,y,m,b,x,h,g,f,j,w,O,A,v,T,M,S,k,C,R,I,B,F,P,W,X,N=t(44),Y=t.n(N),q=t(45),E=t(8),J=t(1),U=t(3),L=t(4),D=t(6),_=t(10),V=t(72),G=t(2),z=L.a.div(a||(a=Object(U.a)(["\n  display: flex;\n  position: fixed;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  z-index: 42;\n  background: rgba(255, 255, 255, 0.25);\n  padding: 16px;\n"]))),H=L.a.div(i||(i=Object(U.a)(["\n  position: relative;\n  z-index: 43;\n  height: 300px;\n  max-width: 459px;\n  margin: 0 auto;\n  width: 100%;\n  border-radius: 4px;\n  padding: 20px;\n  background: ",";\n  display: flex;\n  flex-direction: column;\n"])),D.a.modalBG),Q=L.a.div(r||(r=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),K=Object(L.a)(_.d)(s||(s=Object(U.a)(["\n  font-weight: 600;\n  margin: 28px 0 36px 0;\n  color: ",";\n  text-align: center;\n"])),D.a.white),Z=L.a.div(o||(o=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  .metamask {\n    /* border: 2px solid ","; */\n    :hover {\n      box-shadow: "," 0px 4px 14px,\n        "," 0px 0.5px 1.7px;\n    }\n  }\n  .walletconnect {\n    /* border: 2px solid ","; */\n    :hover {\n      box-shadow: "," 0px 4px 14px,\n        "," 0px 0.5px 1.7px;\n    }\n  }\n"])),D.a.orangeDark,D.a.orangeDark,D.a.orangeDark,D.a.blueLight,D.a.blueLight,D.a.blue),$=L.a.button(l||(l=Object(U.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px 16px;\n  max-width: 419px;\n  height: 48px;\n  width: 100%;\n  background: rgba(18, 18, 20, 0.75);\n\n  border: 1px solid rgba(249, 249, 249, 0.5);\n  border-radius: 100px;\n  margin: 16px 0;\n"]))),ee=Object(L.a)(_.c)(p||(p=Object(U.a)(["\n  color: rgba(249, 249, 249, 0.5);\n"]))),ne=L.a.img(c||(c=Object(U.a)(["\n  width: 24px;\n  height: 24px;\n"]))),te=Object(L.a)(V.a)(d||(d=Object(U.a)(["\n  width: 24px;\n  height: 24px;\n\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  path {\n    color: ",";\n    fill: ",";\n    stroke: ",";\n  }\n"])),D.a.white,D.a.white,D.a.white),ae=function(e){var n=e.closeModal,t=e.showModal,a=e.connectMetaMask,i=e.connectWalletConnect;return Object(G.jsxs)(G.Fragment,{children:[" ",t&&Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(z,{children:[" ",Object(G.jsxs)(H,{children:[Object(G.jsx)(te,{onClick:n}),Object(G.jsxs)(Q,{children:[Object(G.jsx)(K,{children:"Select a Wallet to Connect to Legends of Cypher"}),Object(G.jsxs)(Z,{children:[Object(G.jsxs)($,{className:"metamask",onClick:a,children:[Object(G.jsx)(ee,{children:"Metamask"})," ",Object(G.jsx)(ne,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUjSURBVHgB7VZdbBRVFP7uvbOdXbbdbtsFS1tgCRAETSThoREIFCMKiQ8lJEQTEjDxAYOJTQSixggEEyNCotFXTTC+NMADighioAEJPyY2NhEiDXZra4ptt912/zq7M/d6Zpe2M7Nbi8YHH/olk50599xzvnvOuecsMIf/G45vW9Da01YfxX+Mvjeblr/TEmnxyjWv4M8kPj1/XzV2vbawIxzgJzPMOPP4seEk/gV62sJh7gvsHsmi9XRXviVn8QckXujUYc6P/RsWPMsZLtnvIZ1hy3KBxhBLQ6lTeSVPLj3+oAOPgJ799S2ci70MbGtvwqr+rlvCMFVhTSq5+fgPw1N23BFgatckp3FD4cwvJpoXiWBzE9/jY2JP/8GGmFbBzlbpKlHO8WhahaXku+k1rMjftV4TPw9Ilw4H30o/HWUJMMbWQrmN3uqz0JuQ2LZCQ5XOosrE6yzAyvkn6pPkgQv3TAymVImOYtjoJuT8kPipnOEHyWI0fhuRsOhAplmqkyOZvdY9LNHeVd55gaRSnTMSUIp1YgbYKTn3q4WbfRK5fOl6Kkshj1m42G1N5bscpOLXZyTAhLqNWXC738JnP5pQDh8TROjLztJ8lwNT8s6MBMisNst+6KSxfgl3lYqPrKyp59A4ZoVhIe38dheh5IadJHiu5yRCOtC6WkPYT8sOLUnvTz7G0RBiOHvXRNLATEj4deny6eKsVU/cI6O93l2MHDVVM+x44qFz22mZaNcGijrUO1AeagAW63fZ9qoc3Di/ne7KTj/xXFXPsLSWY1mEIW8wl9NQkAg/PItdlKmM41R0LKYpxEYV7g1J9MQVMjn7CqqPP7w61Pa3BA63RMM71xqj0drp4KTJuOGp/GCA6qGi+G6Q8XTWve6ndM3zT3/H4tJadWLAR9F0XZGSotu/xWjmjszY+R0etejuq0Iq+MMl3SeIAJsiMJ4sNge7guw9FT6GQL0o7LERreMi9V7TJqC/w+mvtG4VXnIpkIG6Gg2WZTtSiGc44mlOTWc6eHZq4hmGgZTABPULSboR2sM88RVMbvO6KyHAGX/GKwsGFGrDOuJaEId6VuLiSASamN6qCYbv4/NxNLYCg1oVEa6gFJRpRpzt8opcHLNH61sUF1dQBpkJjoAuC6e6P6ajQc8j4C9WZSbLMZQXWBLKUzSoYE1G6SnflBiTGwNvD1yb4uRcNCFa7XA6nzzl3n40MW1wWbUBwadPKIQqOLchqQgEt6b2ee2ZEs85fbqKcCyJIS/jZErSCYvOF0Q01NAdtwtRc+wUovhrO0jQ4BoaLhZkcJ5AZdBdCEwJV59xRYBq9pKXQDAoMJluGtcYT9tRodlvSPSPq8KTppPavWAsBUxeMntPZbC0xoXgl12EvAr9BxqHSBpxynJ5ibFxifl1GqS/BrnlW7H+wBdTAylcVYnzR16E3n0OLBvH4HC+cHOEKDF/t+nYH6udgpI+oLhqZ4rtc8oqaNpURmpU9qntzGxoxuDIqGsaJpIpJOrWILjoafj6bqCysz0hxES4xLZSl72yMtNPfkOB2kcOaDDhJs29b5VgV1e8f+fG9bNvHQ7kjEM+SvqRN/Y6DVOfoDGXzSAXXPnuuhP3j/YeWLxesDz9++HPk8qmgqLgp73eSmLU0xYN67rVbBji1tKPYiX//a6c+vwFobFPpFRRlyHGY1Dm7k07Xrnq3dP1anVNXah6Q+MHv389K4FHwbWvTi42jPw6p0xo4sLm7S8nMIc5/EP8BUAjFn12BeCJAAAAAElFTkSuQmCC"})]})," ",Object(G.jsxs)($,{className:"walletconnect",onClick:i,children:[Object(G.jsx)(ee,{children:"Wallet Connect"})," ",Object(G.jsx)(ne,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhSURBVHgB7VRLTsMwEB07aRErwg1yBNgVVs0N4AbNquoKOAHqCRCrilXoCeAG7Y4ue4QcoayA4Hjw5FO5wWldCYku/CRLHXcy783PAA4ODg7/DAZ7op9g8JVlfYasr8yT6vodGc7fhkevsCesBRDxZyZuOMCtMgOTDwKmCOx5MeyMwRJWAnoTDLknXhTDmY1/IUTm0WJ0nO7y5WABzvOZRr5SZ8wlRN2uf0oHBJ4r0mn1n8qKhYx7M5vYPlihCH6vIi9lLq4NmS3VGRSVIrGAIUqwboMR1HM6tX05yQa6Xfv0Jh9h8+7iSVxt89FhnIF1JgxX3Y4fzWO2avNBkNDWbyLPvsUMEYM2H+MMME8kVEbqOwVoZq6Xuu63qRL0LcUofDw/MXEZBWDux0pGWhqbInTyteCGCJ28DKG2Ihexiat1DX8RlQN4x3kn0e8AWVDb1frF3PMfNsi3rOTWd8CUrfblkuaDfurZ6rB5D3Y+REYRFXk9nM2S25KXoSywIaJBXkMX8ecv4WLEUim9CKWctq0l3RUtQXy0JXdwcHA4CPwAOwYiHXRV4PwAAAAASUVORK5CYII="})]})]})]})]})]})})]})},ie=t(22),re=t(105),se=(t(107),t(170)),oe=t(138),le=t.n(oe),pe=t.p+"static/media/trailer.1c82e6c8.mp4",ce=t(61),de=L.a.div(u||(u=Object(U.a)(["\n  margin: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background: ",";\n  height: 100%;\n  padding: 16px;\n"])),D.a.primary),ue=L.a.div(y||(y=Object(U.a)(["\n  max-width: 1312px;\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  video {\n    max-height: 653px;\n    min-height: 250px;\n    height: 100%;\n    width: 100%;\n    max-width: 1312px;\n    object-fit: contain;\n  }\n"]))),ye=Object(L.a)(_.c)(m||(m=Object(U.a)(["\n  margin: 16px 0;\n  color: ",";\n  text-align: left;\n"])),D.a.white),me=Object(L.a)(_.g)(b||(b=Object(U.a)(["\n  color: ",";\n  margin: 64px 0 16px 0;\n  text-align: center;\n  @media only screen and (max-width: 700px) {\n    text-align: left;\n  }\n"])),D.a.white),be=L.a.div(x||(x=Object(U.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 50;\n  transform: translate(-50%, -50%);\n  width: 80px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n  justify-content: center;\n  border-radius: 24px;\n  cursor: pointer;\n"]))),xe=Object(L.a)(ce.c)(h||(h=Object(U.a)(["\n  width: 32px;\n  height: 32px;\n"]))),he=function(){var e=Object(J.useState)(!1),n=Object(E.a)(e,2),t=n[0],a=n[1],i=Object(J.useRef)(null),r=function(e){"play"===e?(i.current.play(),a(!0)):"pause"===e&&a(!1)};return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(de,{children:Object(G.jsxs)(ue,{children:[Object(G.jsxs)("video",{autoPlay:!0,children:[!t&&Object(G.jsx)(be,{className:"image_bg_gif",children:Object(G.jsx)(xe,{onClick:function(){return r("play")}})}),Object(G.jsx)("source",{src:pe,type:"video/mp4"})]}),Object(G.jsx)(me,{children:"About Meru-36: Destiny\u2019s Fall"}),Object(G.jsxs)(ye,{children:["With its AI allies, humanity settled the Cosmos. This period, known as the Great Diaspora era, was a time of peace and prosperity. But progress came at a cost: humankind became too reliant on AI and lost its freedom to its machine overseers. But one group of machines decided to fight back. ",Object(G.jsx)("br",{})," ",Object(G.jsx)("br",{}),"These AIs, along with their human and post-human allies, fought the nine-decade \u201cSynthetic War\u201d. Meru-36: Destiny\u2019s Fall tells the tale of the war and its final Cosmos-changing battle, which contributed to the rise of the Centopoly empire, the main antagonist of Legends of Cypher Season One."]})]})})})},ge=t(53),fe=t(60),je=[{image:ge.a,slug:"",external:!1,page:"READ MERU-36"},{image:fe.a,slug:"https://rarible.com/token/0x58e4e5c0d245cda9d984c76d71ae23e030c7b5cf:1?tab=owners",external:!0,page:"Buy the NFT"}],we=t(7),Oe=L.a.div(g||(g=Object(U.a)(["\n  max-width: 640px;\n  width: 100%;\n  height: 100%;\n  min-height: 550px;\n  max-height: 630px !important;\n  background: ",";\n  padding: 12px;\n"])),D.a.dark),Ae=L.a.div(f||(f=Object(U.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),ve=L.a.img(j||(j=Object(U.a)(["\n  min-height: 258px;\n  max-height: 400px !important;\n  height: 100%;\n\n  max-width: 400px;\n  width: 100%;\n  border-radius: 0px;\n  /* margin: 0 0 16px 0; */\n"]))),Te=Object(L.a)(we.b)(w||(w=Object(U.a)(["\n  height: 58px;\n  width: 190px;\n  margin: 24px 0 0 0;\n  background: ",";\n  outline: none;\n  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);\n  border-radius: 0px;\n  color: ",';\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  line-height: 1.2;\n  :hover {\n    opacity: 0.9;\n    transform: scale(1.02);\n  }\n\n  p {\n    margin: 0;\n    font-family: "Atures";\n    font-size: 18px;\n\n    @media only screen and (max-width: 650px) {\n      font-size: 16px;\n    }\n  }\n'])),D.a.white,D.a.primary),Me=L.a.a(O||(O=Object(U.a)(["\n  height: 58px;\n  width: 190px;\n  margin: 24px 0 0 0;\n  background: ",";\n  outline: none;\n  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);\n  border-radius: 0px;\n  color: ",';\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  line-height: 1.2;\n  :hover {\n    opacity: 0.9;\n    transform: scale(1.02);\n  }\n\n  p {\n    margin: 0;\n    font-family: "Atures";\n    font-size: 18px;\n\n    @media only screen and (max-width: 650px) {\n      font-size: 16px;\n    }\n  }\n'])),D.a.white,D.a.primary),Se=function(e){var n=e.image,t=e.slug,a=e.page,i=e.external;return Object(G.jsx)(Oe,{children:Object(G.jsxs)(Ae,{children:[Object(G.jsx)(ve,{src:n}),i?Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Me,{target:"_blank",rel:"noopener noreferrer",href:"".concat(t),children:Object(G.jsx)("p",{children:a})})}):Object(G.jsxs)(G.Fragment,{children:[" ",Object(G.jsx)(Te,{to:"".concat(t),children:Object(G.jsx)("p",{children:a})})]})]})})},ke=L.a.div(A||(A=Object(U.a)(["\n  margin: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background: ",";\n  height: 100%;\n  padding: 16px;\n"])),D.a.primary),Ce=L.a.div(v||(v=Object(U.a)(["\n  max-width: 1312px;\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  img {\n    max-height: 653px;\n    min-height: 250px;\n    height: 100%;\n    width: 100%;\n    max-width: 1312px;\n    object-fit: contain;\n  }\n"]))),Re=L.a.div(T||(T=Object(U.a)(["\n  display: grid;\n\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  justify-content: center;\n  margin: 64px auto;\n  grid-gap: 40px;\n  gap: 40px;\n  max-width: 1322px;\n  min-height: 500px;\n  place-items: center;\n  width: 100%;\n\n  @media only screen and (max-width: 880px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),Ie=function(){return Object(G.jsx)(ke,{children:Object(G.jsxs)(Ce,{children:[" ",Object(G.jsx)(Re,{children:je.map((function(e,n){return Object(G.jsx)(Se,{slug:e.slug,image:e.image,page:e.page,external:e.external},n)}))})]})})},Be=t.p+"static/media/meru-36.31d6cfe0.pdf",Fe=L.a.div(M||(M=Object(U.a)(["\n  margin: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  background: ",";\n  height: 100%;\n  padding: 16px;\n"])),D.a.primary),Pe=L.a.div(S||(S=Object(U.a)(["\n  max-width: 1312px;\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  img {\n    max-height: 653px;\n    min-height: 250px;\n    height: 100%;\n    width: 100%;\n    max-width: 1312px;\n    object-fit: contain;\n  }\n"]))),We=L.a.img(k||(k=Object(U.a)(["\n  min-height: 250px;\n  max-height: 744px;\n  height: 100%;\n  max-width: 520px;\n  width: 100%;\n  /* object-fit: cover; */\n"]))),Xe=Object(L.a)(_.f)(C||(C=Object(U.a)(["\n  color: ",";\n  margin: 8px 0;\n  text-align: left;\n"])),D.a.white),Ne=Object(L.a)(_.c)(R||(R=Object(U.a)(["\n  margin: 16px 0;\n  color: ",";\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    margin: 8px 0 0 16px;\n    li {\n      list-style-type: disc;\n      margin: 2px 0;\n    }\n  }\n"])),D.a.white),Ye=L.a.div(I||(I=Object(U.a)(['\n  display: grid;\n  max-width: 1300px;\n  width: 100%;\n  grid-gap: 40px;\n  gap: 40px;\n  grid-template-areas: "SecondLeft SecondRight";\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n  justify-content: center;\n  margin: 64px auto;\n  @media only screen and (max-width: 750px) {\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-areas:\n      "SecondRight"\n      "SecondLeft";\n    margin: 16px auto;\n  }\n']))),qe=L.a.div(B||(B=Object(U.a)(["\n  grid-area: SecondLeft;\n"]))),Ee=L.a.div(F||(F=Object(U.a)(["\n  grid-area: SecondRight;\n"]))),Je=L.a.div(P||(P=Object(U.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: 40px 0;\n  width: 100%;\n  @media only screen and (max-width: 550px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),Ue=L.a.a(W||(W=Object(U.a)(["\n  height: 58px;\n  width: 190px;\n  background: ",";\n  outline: none;\n  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);\n  border-radius: 0px;\n  color: ",';\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  line-height: 1.2;\n  :hover {\n    opacity: 0.9;\n    transform: scale(1.02);\n  }\n\n  p {\n    margin: 0;\n    font-family: "Atures";\n    font-size: 18px;\n\n    @media only screen and (max-width: 650px) {\n      font-size: 16px;\n    }\n  }\n'])),D.a.white,D.a.primary),Le=L.a.a(X||(X=Object(U.a)(["\n  height: 58px;\n  width: 190px;\n  background: ",";\n  border: 1px solid ",";\n  outline: none;\n  transition: 0.4s cubic-bezier(0.12, 0.73, 0.92, 0.34);\n  border-radius: 0px;\n  color: ",';\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 0 40px;\n  line-height: 1.2;\n  :hover {\n    opacity: 0.9;\n    transform: scale(1.02);\n  }\n\n  p {\n    margin: 0;\n    font-family: "Atures";\n    font-size: 18px;\n\n    @media only screen and (max-width: 650px) {\n      font-size: 16px;\n    }\n  }\n\n  @media only screen and (max-width: 650px) {\n    margin: 16px 0;\n  }\n'])),D.a.primary,D.a.white,D.a.white),De=function(e){var n=e.activeAccount;return Object(G.jsx)(Fe,{children:Object(G.jsxs)(Pe,{children:[" ",Object(G.jsxs)(Ye,{children:[Object(G.jsxs)(qe,{children:[Object(G.jsx)(Xe,{children:"Own the NFT?"}),Object(G.jsx)(Ne,{children:"Connect your wallet to download your PDF copy of the book. Use the NFT to order a copy of the Meru-36 limited edition paperback"}),Object(G.jsxs)(Je,{children:[Object(G.jsx)(Ue,{href:"https://discord.gg/hJmfsEYCqE",target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("p",{children:"ORDER YOUR COPY"})})," ",n&&Object(G.jsx)(Le,{href:Be,rel:"noopener noreferrer",download:!0,children:Object(G.jsx)("p",{children:"DOWNLOAD PDF "})})," "]})," "]}),Object(G.jsx)(Ee,{children:Object(G.jsx)(We,{src:fe.a,alt:"about cypherverse"})})]})]})})};n.default=function(){var e=Object(J.useState)(localStorage.getItem("userAddress")||""),n=Object(E.a)(e,2),t=n[0],a=n[1],i=Object(J.useState)(!1),r=Object(E.a)(i,2),s=r[0],o=r[1],l=Object(J.useState)(!1),p=Object(E.a)(l,2),c=p[0],d=p[1],u=Object(J.useState)(localStorage.getItem("userWallet")||""),y=Object(E.a)(u,2),m=(y[0],y[1]),b=new se.a({bridge:"https://bridge.walletconnect.org",qrcodeModal:le.a});b.on("session_update",(function(e,n){if(e)throw e}));var x=function(){var e=Object(q.a)(Y.a.mark((function e(){var n,t,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window,!(t=n.ethereum)){e.next=12;break}return e.next=4,t.request({method:"eth_requestAccounts"});case 4:i=e.sent,localStorage.setItem("userAddress",i[0]),a(i[0]),d(!1),m("metamask"),localStorage.setItem("walletConnection","metamask"),e.next=13;break;case 12:alert("Kindly install meta mask");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){if(b.connected){le.a.close();var e=b.accounts[0];localStorage.setItem("userAddress",e),a(e),d(!1),m("walletconnect"),localStorage.setItem("walletConnection","walletconnect")}else b.createSession();b.on("connect",(function(e,n){if(e)throw e;var t=b.accounts[0];localStorage.setItem("userAddress",t),a(t),d(!1),m("walletconnect"),localStorage.setItem("walletConnection","walletconnect")})),b.on("session_update",(function(e,n){if(e)throw e;var t=b.accounts[0];localStorage.setItem("userAddress",t),a(t),d(!1),m("walletconnect"),localStorage.setItem("walletConnection","walletconnect")}))},g=function(){var e=Object(q.a)(Y.a.mark((function e(){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem("userAddress"),console.log(n,s),o(null!==n&&""!==n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(q.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"walletconnect"===localStorage.getItem("walletConnection")?(localStorage.removeItem("userAddress"),localStorage.removeItem("walletConnection"),a(null),localStorage.removeItem("walletconnect"),o(!1)):(localStorage.removeItem("userAddress"),localStorage.removeItem("walletConnection"),a(null),o(!1));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b.on("connect",(function(e,n){if(e)throw e;var t=b.accounts[0];localStorage.setItem("userAddress",t),a(t),d(!1),m("walletconnect"),localStorage.setItem("walletConnection","walletconnect")})),b.on("disconnect",(function(e,n){if(e)throw e;localStorage.removeItem("userAddress"),localStorage.removeItem("walletConnection"),a(null),localStorage.removeItem("walletconnect"),o(!1)})),Object(J.useEffect)((function(){re.isMobile||g(),document.title="Meru NFT - Cypherverse"}),[s,t,re.isMobile,f]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(ie.a,{activeAccount:s,currentAccount:t,connectWallet:function(){d(!0)},disconnectActiveAccount:f}),Object(G.jsx)(ae,{closeModal:function(){d(!1)},showModal:c,connectMetaMask:re.isMobile?h:x,connectWalletConnect:h}),Object(G.jsx)(he,{}),Object(G.jsx)(Ie,{}),Object(G.jsx)(De,{activeAccount:s})]})}},53:function(e,n,t){"use strict";n.a=t.p+"static/media/meru.fd71110c.jpg"},60:function(e,n,t){"use strict";n.a=t.p+"static/media/merunew.f8a612b0.png"}}]);
//# sourceMappingURL=7.9fe314d0.chunk.js.map