const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

const matches = [
	{
		regex: /^(HE+\s*HO+)$/,
		img: 'heho'
	},
	{
		regex: /^(he+\s*ho+)$/,
		img: 'little_heho'
	},
	{
		regex: /^(he+\s*ho+)$/i,
		img: 'HeEeHoOo'
	},
	{
		regex: /^(ho+\s*he+)$/i,
		img: 'HoOoHeEe'
	},
	{
		regex: /^(he+)$/i,
		img: 'he'
	},
	{
		regex: /^(ho+)$/i,
		img: 'ho'
	},
	{
		regex: /^(ho+\s*he+)$/,
		img: 'little_hohe'
	},
	{
		regex: /^(HO+\s*HE+)$/,
		img: 'hohe'
	}
]

client.on('message', (msg) => {
	for (let i = 0; i < matches.length; i++) {
		const { regex, img } = matches[i]

		if (regex.test(msg.content)) {
			msg.channel.send(new Discord.MessageAttachment(`./${img}.png`))
			break
		}
	}
})

client.login(process.env.TOKEN)
