
type Option = {
    text: string
}

type MessageImageProps = {
    direction: 'sent' | 'received'
    content: {
        text: string
        options: Option[]
    };
    formattedDate: string
    relativeDate: string
    messageDateText: string
}

export function MessageOptions({ direction, content }: MessageImageProps) {
    return (
        <div className={`flex flex-col gap-2 w-2/3  p-4 ${direction === 'sent' ? " bg-gray-100" : "bg-green-100 ml-auto"}`} >
            <div className="flex ">
                <img className="w-10 h-10 rounded-full" src={`/public/assets/images/${direction}.jpg`} alt="" />
                <div className="flex flex-col gap-1">
                    <span>{content.text}</span>
                    <ul>
                        {content.options.map((option: { text: string }) => (
                            <li key={option.text[0]} className="text-gray-400">{option.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}