export default function StatBar({children}){
    return <div className="relative w-full h-1.5 r overflow-hidden">
        <div className="abs-fill bg-gray-600"></div>

        <div className="absolute top-0 left-0 bottom-0 r bg-white"
        style={{
            width: `${children * 100}%`
        }}></div>
    </div>
}
