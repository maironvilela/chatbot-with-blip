import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function UseDate() {
  const getRelativeDate = (dateAndTimeUTC: Date) => {
    const dateFormatted = format(dateAndTimeUTC, "dd 'de' LLLL 'às' HH:mm'", {
      locale: ptBR,
    })

    const dateRelativeToNow = formatDistanceToNow(dateAndTimeUTC, {
      locale: ptBR,
      addSuffix: true,
    })

    return {
      dateFormatted,
      dateRelativeToNow,
    }
  }

  return {
    getRelativeDate,
  }
}
