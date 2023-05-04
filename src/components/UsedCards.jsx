const UsedCards = ({used, setUsed}) => {
  return (
    <div className="used">
      <h1>{'Cards Played: ' + used.length}</h1>
    {used.map(item => (
      <div>
        <img src={item} alt='used-card'/>
      </div>
    ))}
  </div>
  )
}

export default UsedCards