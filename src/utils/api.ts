let requestCount = 0;
const MAX_REQUEST_COUNT = 5;

const callAI = async () => {
  console.log('CALL');
  if (requestCount >= MAX_REQUEST_COUNT)
    return console.warn('최대 요청 횟수에 도달했습니다.');
  try {
    const response = await (
      await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content:
                "'중꺾마, 중요한 건 꺾이지 않는 마음', '고민했던 일들이 해결되는 날입니다.', '어둡고 칙칙한 것들은 치워버리세요.'같은 들으면 기분 좋을 한마디를 만들어줘. 따옴표는 제거해줘.",
            },
          ],
          temperature: 0.5,
          max_tokens: 200,
        }),
      })
    ).json();
    requestCount++;
    if (response.choices && response.choices.length > 0)
      return response.choices[0].message.content;
    else throw new Error('다시 한 번 시도해 주시기 바랍니다.');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export default callAI;
