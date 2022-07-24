import { toast } from "react-toastify"

const ErrorHandler = ({msg, info}) => {
    switch(msg) {
        case 'JOIN_GAME':
            toast.error(ERRORS.JOIN_GAME_AJAX)
            console.error(info)
            return
        case 'I_AM_ONLINE':
            toast.error(ERRORS.I_AM_ONLINE_AJAX)
            return
        case 'ARE_THEY_ONLINE':
            toast.error(ERRORS.ARE_THEY_ONLINE_AJAX)
            return
        default:
            toast.warning(ERRORS.DEFAULT)
            return
    }
}

const ERRORS = {
    'I_AM_ONLINE_AJAX': 'Błąd synchronizacji. Spróbuj ponownie',
    'ARE_THEY_ONLINE_AJAX': 'Błąd synchronizacji. Spróbuj ponownie',
    'JOIN_GAME_AJAX': 'Nie udało się połączyć z grą. Spróbuj ponownie',
    'DEFAULT': 'Pojawił się niezidentyfikowany błąd'
}

export default ErrorHandler