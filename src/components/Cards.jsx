import { useState } from "react"

const Cards = () => {
  const [picked, setPicked] = useState('')
  const [both, setBoth] = useState(false)
  const [used, setUsed] = useState([])

  let instructions = [
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F48d7f1b8-53b5-4d67-b2de-35fd8b5b21f8%2F1.png?table=block&id=2796115c-f920-4e23-ad90-d85e30c86a31&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9ff2b8c8-1670-4101-9530-80d983a2deb2%2F2.png?table=block&id=1e21f6d8-6c41-4335-8021-fa181b0e157c&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9d8481fc-64b9-4c13-aa73-b621f991e282%2F3.png?table=block&id=bccb267c-0cac-48f6-a340-42d22dcaa669&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F71885e28-e40c-4102-b0bc-c6b51c24cc1e%2F4.png?table=block&id=56c88b90-4831-4331-843b-0f98a90bc555&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
  ]

  let blue = [
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc28ccce8-9fae-4e68-b2c5-079bbca49dfe%2F5.png?table=block&id=f981a59f-729f-4e18-84a1-3a8692a85372&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc459086c-c907-4a05-ac9a-b0e64aa17f3c%2F6.png?table=block&id=eac2f732-9c8d-4141-8375-918467b897e1&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F750e74cc-974d-4567-935d-fd1f966dc1d6%2F7.png?table=block&id=fcbf136e-de3b-4952-9800-955d13377cc2&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb225acdc-8d5d-4789-ad00-1071ab3eea18%2F8.png?table=block&id=7997b4b5-11c7-4b92-ab7a-e2d36939a7fb&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcfc301c2-d3d8-4ca3-b9fd-83f45d0317fe%2F9.png?table=block&id=a317a62e-74b0-4afd-b0dd-0dd8587cab8a&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fda80e4a7-4f79-4992-9e6e-cdc0103fc743%2F10.png?table=block&id=d908f2ec-2980-4911-8759-9e5b7257841e&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcf0cbcb5-19ed-4f4e-bb6d-1155b599dc91%2F11.png?table=block&id=a5985df4-3b04-4b15-bcd6-d3f2e7863687&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5bf26ce9-4f67-4af8-aaeb-1b398893f31e%2F12.png?table=block&id=1a823113-282e-43b3-880e-22c0d6f62ae6&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb68f1748-5e05-4a88-996c-6615151807b3%2F13.png?table=block&id=3e7b8f95-6433-497f-919a-27efc728b0de&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F727ffd64-932a-4c69-b1fd-3545080d2f3c%2F14.png?table=block&id=f6172b5d-d5b6-4f4e-b4d5-19e162b15741&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F061007b6-12e2-43c7-ae00-517acb11d2b7%2F15.png?table=block&id=ead792e4-333a-4f7c-a144-1a4606acc47a&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fca0ee360-08d9-47d4-8362-2a77e9b173cd%2F16.png?table=block&id=b95897d8-a3a0-4c4a-9cb0-72432b691493&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9e00629d-1a01-4c63-91e8-3d95ca84864f%2F17.png?table=block&id=85f72b8b-44a5-46ff-a17f-54a959abcf22&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F065123e4-4522-46c4-8b05-ddc34af78339%2F18.png?table=block&id=41a5a55a-3c41-43ca-9351-dd7bf9f5efba&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F718cf242-7c0d-453b-8133-dfd6a95c3b4c%2F19.png?table=block&id=f3736216-7206-439b-96de-8480d9dc7f14&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d2eb836-a7a7-40dc-9857-db6b118f3a5d%2F20.png?table=block&id=29466292-3fc0-4b1a-8a46-b1ef7b045710&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F11707ae4-6a9c-487e-8cea-8829332c7e36%2F21.png?table=block&id=e7774918-b94d-43bd-a5f5-5e51ad641c92&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F34eaf84e-5f84-40ca-807e-c95d8e1fd8d0%2F22.png?table=block&id=20edf57c-85d8-4621-b8bb-110ed1438299&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F92899fb3-24d8-44f6-bc1d-76803ecab8ee%2F23.png?table=block&id=7365d28b-1bae-4c2d-a3a9-91280e9cd616&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd5571824-1414-46f3-838a-7172fb8d6e64%2F24.png?table=block&id=21bb098b-8d25-440e-a106-c18db17fe03f&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F53ca64a1-61b3-41a3-bd82-d2ba57f5d1a8%2F25.png?table=block&id=fa5f0a65-02bf-4059-8eb7-62c315124880&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb7e69ad2-6691-411d-8b5f-9b79490332d8%2F26.png?table=block&id=5b1d3e51-4d2c-49ec-8c6b-9f8850176f97&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0ec9a929-70c9-4bfa-a542-45f0334a6a69%2F27.png?table=block&id=5f0d9549-44ec-47ea-822f-0cc344f8f5e4&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fed2f095f-f36b-42c2-962f-fb204fdb2a61%2F28.png?table=block&id=71ec860b-cf31-483d-bd39-f1f1a5e4edb8&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F15b5e149-a42b-473f-ad5a-b8d7e188fad3%2F29.png?table=block&id=b42e6a12-22c9-4cc4-90bd-6db73346a3ab&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faca06d51-36b1-4eb2-a2af-20b0488fe27e%2F30.png?table=block&id=b7cbd6cd-97be-4457-b6fa-ad1e6dea6a57&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F97c36513-e521-4d09-be87-dc495f3b7be2%2F31.png?table=block&id=aa2d5013-acaa-4149-bf0b-81c557f8fa23&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdfbada89-abb8-4b0e-924c-1ff76b37e987%2F32.png?table=block&id=91cf9a6a-1f4d-400f-95d8-1fc6e7701621&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffa9683fc-2e7b-4399-9388-2874a696a9b7%2F33.png?table=block&id=5a0197e7-b6e3-41b6-af00-9414a9b6ed7c&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F91840d40-7b8a-405e-ae17-8691be23e631%2F34.png?table=block&id=1d327d6e-216e-4235-ac50-367555b02e4a&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03afeb60-3c1c-4601-acb3-c5ead02c2845%2F35.png?table=block&id=cc90cb8a-b37d-4eba-9d13-c0da4c4a4167&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2dc200cb-3f84-4714-808b-47b589ea6b4f%2F36.png?table=block&id=cd569b1d-8613-4767-a156-0dc031d275e4&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa50a2179-f62c-4258-ac73-ef2d7f17c709%2F37.png?table=block&id=582500ff-f9e8-4548-a0c3-0856b119c59b&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3dbfef05-b249-4210-a042-4284bbf4009a%2F38.png?table=block&id=f9c5c9e3-de5f-4247-89aa-8539f78afb2d&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff074eb60-8bef-47bc-94b3-0c4edb63e472%2F39.png?table=block&id=3da0e3a7-732d-490f-a9e9-38aebbf34f4b&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9844b41a-46a9-48a1-bf30-7582912eb5fa%2F40.png?table=block&id=7d904d15-6c94-4073-b699-8915451cf200&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff535b9a2-d38b-4b55-9fe4-64b3bce41cc8%2F41.png?table=block&id=99d58d01-3145-48cb-b78a-5cb64efabfc7&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fec464d12-1036-433e-bedd-fb6769a82218%2F42.png?table=block&id=3bd15c3d-207e-425a-aa15-fe65c0f2c3ea&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03db5efc-77c0-45b0-b7f4-1dea458e5bf9%2F43.png?table=block&id=6b80b29d-d660-4356-a46c-47970fcd3e45&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcecc5d77-de2b-4f55-8e23-187f81001e4e%2F44.png?table=block&id=d56184c6-19ec-4a45-9403-904349d21ca6&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1a89312e-307b-4e45-b299-a342cc7733ba%2F45.png?table=block&id=0cfa7d0d-bd31-4af3-9f40-c8bf5adc37b7&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc55dbd6d-905a-4d54-a8fa-73b844b9c878%2F46.png?table=block&id=27b2a957-5956-479f-8a7a-f90f829cb171&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04fcc5b2-27aa-4699-82ad-7c527ab30604%2F47.png?table=block&id=8730a5c9-3d34-4e62-8ba6-2f80d260f045&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f7882ff-7810-4f2a-9ed2-c379e0e15719%2F48.png?table=block&id=62b1e6ba-8c23-4f9f-be46-49e3674c493d&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0aaa6781-dc3b-42eb-83fb-ca89aaa4d215%2F49.png?table=block&id=7e512a93-5c52-4b30-8cf2-ef78c2b73e9e&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F067952bc-6b7e-4f34-a1b4-1ddcb026c136%2F50.png?table=block&id=e3a9e46a-7a7d-4e6a-84df-16647e6937de&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3340203b-06bd-436f-88be-66a72fceabe4%2F51.png?table=block&id=e5183d67-b8f4-4af1-8aec-7ba3da4eb415&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe2e5ad6a-be5e-4b4d-ba35-86825b9ae8c0%2F52.png?table=block&id=3c51d78b-9d92-46bb-b10a-28e79a3425f9&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F749841b2-a0e2-4fe3-a0c8-508c6c2578d4%2F53.png?table=block&id=2d59048b-dd12-4ca1-bd18-86d0677d0c01&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0be53730-7601-4e46-a0ce-fc63e336e294%2F54.png?table=block&id=6e65c25a-f247-47bb-9998-5711f9372eab&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2"
  ]
  
  let red = [
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1096978e-5dba-4aed-9076-0d0b8adaaae3%2F55.png?table=block&id=a6ed5626-53f2-4a82-9e05-0a2c73299cac&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F848483c6-ef4e-4d43-bbf2-4b82e7d49820%2F56.png?table=block&id=fad2a292-2a45-4502-b0f7-5fb9ed08dec3&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff77fba27-7c69-493e-9448-05a968604fca%2F57.png?table=block&id=c7abb446-2bb5-4af9-8454-2c8fcfa386ea&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd9c99457-3380-4b75-8fac-013818276e57%2F58.png?table=block&id=e7b1ea25-358d-4776-8cf5-5c8489077dcb&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F77ad6ed7-59f5-4d1f-aa46-9875df2932b3%2F59.png?table=block&id=a7203572-dd0a-4337-bc33-9e610c3cdc59&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F51c54599-fc79-4786-a5a4-89d496e31c10%2F60.png?table=block&id=4c243d6c-f106-4d11-8540-5910036105f6&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F70732aff-36fe-40a4-8f3d-f5903627e024%2F61.png?table=block&id=6f2f7468-6045-4936-8a96-8322deb85399&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F59664eb5-5abe-44f1-ab42-a8cceab80d57%2F62.png?table=block&id=6a16ed33-6535-4251-ab28-4aad0c0fd22f&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9fbb4584-4a02-4a78-86b8-543871187a88%2F63.png?table=block&id=99d9836e-e6bb-4aa1-b04c-b07b570b7cac&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba3c103f-89ab-442d-9acb-d6046daf0e32%2F64.png?table=block&id=e15d7d5b-1c50-441e-b444-682189b8d522&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe3d5fbca-d312-4c22-8fbf-c55fa1adeb6e%2F65.png?table=block&id=dbc122c9-ded2-452a-9fd0-02a9a648df2f&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2025dfb3-e43f-4c48-9bb4-6671930a7b49%2F66.png?table=block&id=654496c3-6425-476f-99bc-9f1e3058c84c&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F68a654bb-32e8-4629-bf97-62171badceb5%2F67.png?table=block&id=cb79f5b0-3b8d-4a15-ace3-d7819003964f&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0a656d91-c495-4d57-afee-2ae6b2ed1375%2F68.png?table=block&id=102d8561-0dc6-4a86-b0ed-9cb8c78d298d&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d66e02f-7579-4a3d-b299-147d9a400b72%2F69.png?table=block&id=1f1126c7-4d25-4ce3-85fb-4ac28b8e70b6&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F445cc87a-b9b7-48d5-a8c9-6512cec1ef35%2F70.png?table=block&id=15b4abfd-8ff1-4270-8a1b-2a7df10cfda8&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe0b72366-32f6-4367-9737-b8d723a1e36d%2F71.png?table=block&id=8997d88b-c723-445b-ab19-c77044025bde&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5769038f-4ff8-4945-922f-5aac5b6b420e%2F72.png?table=block&id=7b34fc12-03d1-4f71-9b9f-caed527df6db&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff475aa7d-5cb4-411c-aae5-62582855189a%2F73.png?table=block&id=edf43ca5-c702-4591-9d12-8d088c22978c&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2",
    "https://parentsarehuman.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F29ccd254-aa26-4457-8879-7143d1195abd%2F74.png?table=block&id=96ddcbb5-ebde-4b84-9a15-1d18ce899aa1&spaceId=65e2dda4-18c9-419e-a975-62ca02abb8ad&width=2000&userId=&cache=v2"
  ]

  
  const toggleRed = () => {
    setBoth(prevBoth => !prevBoth);
  }


  const pickRandom = () => {
    if (both === false) {
      let random = Math.floor(Math.random() * 50);
      if (used.includes(blue[random])){
        pickRandom()
      } else {
        setPicked(blue[random])
        setUsed([...used, blue[random]])
      }
    } else {
      let stack = Math.floor(Math.random() * 7);
      if (stack===5 || stack===6){
        let random = Math.floor(Math.random() * 20);
        if (used.includes(red[random])){
          pickRandom()
        } else {
          setPicked(red[random])
          setUsed([...used, red[random]])
        }
      } else {
        let random = Math.floor(Math.random() * 50);
        if (used.includes(blue[random])){
          pickRandom()
        } else {
          setPicked(blue[random])
          setUsed([...used, blue[random]])
        }
      }
    }
  }
  



  return (
    <div>
      <div className="gameField">
        <img src={picked} alt='card-picked' />
        <button onClick={toggleRed}>Red Cards</button>
        <button onClick={pickRandom}>Random</button>
        <button>Reset</button>
      </div>
      <div>
        {used.map(item => (
          <img src={item} alt='used-card' />
        ))}
      </div>
      <div className="instructions">
        {instructions.map( instruction => (
          <img src={instruction} alt='instruction-card'/>
        ))}
      </div>
    </div>
  )
}

export default Cards