import { UpdateBookController } from './UpdateBookController';
import { ListBookController } from './ListBookController';
import { DeleteBookController } from './DeleteBookController';
import { CreateBookController } from './CreateBookController';

export class BookController {

    private _createBook: CreateBookController = new CreateBookController()
    private _deleteBook: DeleteBookController = new DeleteBookController()
    private _updateBook: UpdateBookController = new UpdateBookController()
    private _listBook: ListBookController = new ListBookController()

    createBook(){
        return this._createBook.handler
    }
    
    listBook(){
        return this._listBook.handler
    }

    updateBook(){
        return this._updateBook.handler
    }

    deleteBook(){
        return this._deleteBook.handler
    }
}