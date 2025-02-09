
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
    avatarUrl: string

}

export function MessageOptions({ direction, content, avatarUrl, formattedDate, messageDateText, relativeDate }: MessageImageProps) {
    return (
        <div className="p-4" >
            <div className="flex items-center gap-2">
                <img className=" w-10 h-10 rounded-full" src={avatarUrl} alt="" />

                <div className={`flex flex-col gap-2 w-96  p-4 rounded-xl ${direction === 'sent' ? " bg-gray-100" : "bg-green-100 ml-auto "}`} >

                    <div className="flex justify-between " >
                        <div>
                            <span>{content.text}</span>
                            <ul>
                                {content.options.map((option: { text: string }) => (
                                    <li key={option.text[0]} className="text-gray-400">{option.text}</li>
                                ))}
                            </ul>
                        </div>

                        <time className="w-30 text-gray-400 flex items-end"
                            title={formattedDate}
                            dateTime={new Date(messageDateText).toISOString()}
                        >
                            {relativeDate}
                        </time>

                    </div>
                </div>
            </div>
        </div >
    )
}