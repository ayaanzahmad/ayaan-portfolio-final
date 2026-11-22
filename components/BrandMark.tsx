export default function BrandMark({id}:{id:string}) {
 const names:Record<string,string>={"00":"Cenvi","dynamo":"Handshake","meticulous":"Meticulous Health Solutions"};
 if(!names[id])return null;
 return <div className={`project-brand project-brand-${id}`} role="img" aria-label={`${names[id]} logo`}>{id==='00'?<img src="/brands/cenvi.png" alt=""/>:<span className={`brand-mask ${id==='dynamo'?'handshake-brand':'meticulous-brand'}`}/>}</div>;
}
