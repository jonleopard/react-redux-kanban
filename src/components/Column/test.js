<StyledColumn px={2} pt={2} pb={1} mr={4}>
	<ColumnTitle />
	{
		cards.map( (card) => {          // iterates over all the cards - the card arg is just whatever card it's on
			<Card cardInfo={card} /> // Card should handle displaying the data, but you need to pass the card data in as props
			 // or 					// this can be done by either just giving it a prop of cardInfo or something and passing all the data in there
			<Card {...card}/> 		// or you can just spread the card data if each card is an object
		})
	}
	<AddCard onClick={addCard} />
</StyledColumn>


// Overview of your app's flow
//
//
// Columns container

<ColumnsContainer>                              // Gets all the columns from store and displays all columns
	{
		this.props.columns.map( (column) => {
			<Column columnData={column} /> // Renders each column passing it the data for that column
		})
	}
</ColumnsContainer>

//
//
// Column component
<Column>
	{
		this.props.cards.map( (card) => { // iterates over all the cards that were passed in as props
			<Card cardData={card} />  // renders each card and passes each one the card data for that card
		})
	}
</Column>