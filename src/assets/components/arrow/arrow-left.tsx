import '/src/assets/components/arrow/arrow.css'

function Arrow() {
	return (
		<>
			<p className='left-arrow' onClick={() => {
				alert('coucou');
			}}>&lsaquo;</p>
		</>
	)
}

export default Arrow;