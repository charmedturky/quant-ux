import UserService from 'services/UserService'
import ModelService from 'services/ModelService'
import PublicModelService from 'services/PublicModelService'
import CommentService from 'services/CommentService'
import SymbolService from 'services/SymbolService'
import HelpService from 'services/HelpService'
import ImageService from 'services/ImageService'

class Services {

    setErrorHandler (handler) {
        this.errorHandler = handler
        ModelService.setErrorHandler(handler)
        PublicModelService.setErrorHandler(handler)
        UserService.setErrorHandler(handler)
        ImageService.setErrorHandler(handler)
    }

    getImageService () {
        ImageService.setToken(UserService.getToken())
        return ImageService
    }

    getUserService () {
        UserService.setToken(UserService.getToken())
        return UserService
    }

    getSymbolService () {
        return SymbolService
    }

    getHelpService () {
        return HelpService
    }

    getModelService (route) {
        if (route && route.meta && route.meta.isPublic) {
            PublicModelService.setToken(UserService.getToken())
            return PublicModelService
        }
        ModelService.setToken(UserService.getToken())
        return ModelService
    }

    getPublicModelService () {
        PublicModelService.setToken(UserService.getToken())
        return PublicModelService
    }

    getCommentService () {
        CommentService.setToken(UserService.getToken())
        return CommentService
    }

}
export default new Services()