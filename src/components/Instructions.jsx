const Instructions = () => {
  let instructions = [
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F48d7f1b8-53b5-4d67-b2de-35fd8b5b21f8%2F1.png?table=block&id=2796115c-f920-4e23-ad90-d85e30c86a31&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9ff2b8c8-1670-4101-9530-80d983a2deb2%2F2.png?table=block&id=1e21f6d8-6c41-4335-8021-fa181b0e157c&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9d8481fc-64b9-4c13-aa73-b621f991e282%2F3.png?table=block&id=bccb267c-0cac-48f6-a340-42d22dcaa669&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F71885e28-e40c-4102-b0bc-c6b51c24cc1e%2F4.png?table=block&id=56c88b90-4831-4331-843b-0f98a90bc555&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
  ]

  return (
    <div className="instructions">
      <h1>Instructions</h1>
    {instructions.map( instruction => (
      <img src={instruction} alt='instruction-card'key={instruction} />
    ))}
  </div>
  )
}

export default Instructions