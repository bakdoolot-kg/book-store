import React from 'react';
import {useSelector} from "react-redux";
import './book-page.css'
import BookBuy from "../../components/book-buy/Book-buy";

export const BookPage = () => {
	const book = useSelector(state => state.books.currentBook)
	console.log(book)

	if (!book) return null

	return (
		<div className="bookPage">
			<h1 className="bookPage__title">{book.title}</h1>
			<div className="bookPage__content">
				<div className="bookPage__left">
					<img src={book.coverImage} alt={book.title} className="bookPage__left-img"/>
				</div>
				<div className="bookPage__right">
					<p>{book.author}</p>
					<div className="bookPage__buy-book">
						<BookBuy book={book}/>
					</div>
				</div>
			</div>
		</div>
	);
};