const ButtonVector = ({className , width , height}: {className?:string , width?:number; height?:number}) => {
  return (
<svg className={className} width={width ||"60"} height={height || "64" }viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.8446 0.00352721C42.649 -0.214165 54.3842 9.66933 58.5489 22.8323C62.6134 35.6789 57.9381 49.604 47.0482 57.539C36.1112 65.5083 21.1622 66.0783 10.3298 57.9673C-0.0734374 50.1776 -2.06423 36.106 1.89026 23.7258C5.91656 11.1208 15.6138 0.212174 28.8446 0.00352721Z" fill="currentColor"/>
</svg>
  )
}

export default ButtonVector