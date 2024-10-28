import '/src/assets/components/arrow/arrow.css'

function Arrow() {
	return (
		<>
			<p className='right-arrow' onClick={() => {
				alert('coucou');
			}}>&rsaquo;</p>
		</>
	)
}

export default Arrow;