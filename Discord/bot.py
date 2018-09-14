import discord
import asyncio

client = discord.Client()
TOKEN = 'NDE5NTc3NDQ5NDQxOTE4OTc4.DknYsg.Cnc0Jw74A4c81fs25BDXugJ1sAk'

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

@client.command(pass_context=True)
async def purge(context, amount=None):
    embed = discord.Embed(colour=discord.Colour.gold())
    embed.set_author(name="{} Moderation".format(client.user.name), icon_url=client.user.avatar_url)
    if (context.message.author.bot):
        return
    await client.send_typing(context.message.channel)
    if(amount.isdigit() == False):
        embed.add_field(name="Error", value="You need to specify a number amount.")
        await client.say(embed=embed)
        return
    elif(int(amount) <= 0):
        embed.add_field(name="Error", value="You need to specify an amount higher than 0.")
        await client.say(embed=embed)
        return
    elif(context.message.channel.permissions_for(context.message.author).manage_messages == False):
        embed.add_field(name="Error", value="Incorrect permissions.")
        await client.say(embed=embed)
        return
    elif(amount==None):
        embed.add_field(name="Error", value="Missing 'Amount' parameter")
        await client.say(embed=embed)
        return
    else:
        await client.purge_from(context.message.channel, limit=int(amount)+1)
        embed.add_field(name="Purge completed:", value="{} messages purged from {}".format(amount, context.message.channel.name))
        await client.say(embed=embed)
        return


client.run(TOKEN)
os.system('pause')
