export const formatDate = (value, formatType = 'short') => {
  const date = new Date(value)

  if (isNaN(date)) return 'Invalid Date'

  const optionsMap = {
    short: { month: 'long', day: 'numeric' },
    medium: { month: 'long', day: 'numeric', year: 'numeric' },
    full: {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    },
  }

  const options = optionsMap[formatType] || optionsMap.short
  return date.toLocaleDateString('en-US', options)
}
