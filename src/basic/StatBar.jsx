export default function StatBar({children}){
    return <div className="relative w-full h-1.5 rounded-2xl overflow-hidden">
        <div
        className="absolute top-0 left-0 bottom-0 right-0"
        style={{
            background: '#444'
        }}></div>

        <div className="absolute top-0 left-0 bottom-0 rounded-2xl bg-white"
        style={{
            width: `${children * 100}%`
        }}></div>
    </div>
}