export const getWeatherStyles = (condition: string) => {
    const normalized = condition.toLowerCase();
    
    const baseStyles = {
      emoji: '🌍',
      background: 'bg-gray-100',
      text: 'text-gray-800',
      border: 'border-gray-300',
      animation: ''
    };
  
    if (normalized.includes('nublado') || normalized.includes('cloud')) {
      return {
        ...baseStyles,
        emoji: '☁️',
        background: 'bg-gray-200',
        text: 'text-gray-900',
        animation: 'cloudy-animation'
      };
    }
  
    if (normalized.includes('algumas') || normalized.includes('cloudy')) {
        return {
          ...baseStyles,
          emoji: '🌤️',
          background: 'bg-gray-100',
          text: 'text-gray-900',
          animation: 'cloudy-animation'
        };
      }

    if (normalized.includes('chuva') || normalized.includes('rain')) {
      return {
        ...baseStyles,
        emoji: '🌧️',
        background: 'bg-blue-100',
        text: 'text-blue-700',
        animation: 'rain-animation'
      };
    }

    if (normalized.includes('trovoada') || normalized.includes('rain')) {
      return {
        ...baseStyles,
        emoji: '⛈️',
        background: 'bg-blue-900',
        text: 'text-blue-100',
        animation: 'rain-animation'
      };
    }
  
    if (normalized.includes('sol') || normalized.includes('clear')) {
      return {
        ...baseStyles,
        emoji: '☀️',
        background: 'bg-yellow-100',
        text: 'text-yellow-900',
        animation: 'sun-animation'
      };
    }
  
    if (normalized.includes('neve') || normalized.includes('snow')) {
      return {
        ...baseStyles,
        emoji: '❄️',
        background: 'bg-blue-50',
        text: 'text-blue-900',
        animation: 'snow-animation'
      };
    }
  
    return baseStyles;
  };