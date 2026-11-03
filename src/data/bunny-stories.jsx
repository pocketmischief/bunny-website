import { Link } from 'react-router-dom';
import petImage from '../assets/screenshot-pet.webp';
import drawingImage from '../assets/screenshot-whiteboard.webp';
import gamesImage from '../assets/screenshot-games.webp';
import homeImage from '../assets/screenshot-home.webp';

const defaults = {
  datePublished: '2026-11-03',
  dateModified: '2026-11-03',
  author: 'The Bunny team',
};

export const BUNNY_STORIES = [
  {
    ...defaults,
    slug: 'bunny-app-for-long-distance-couples',
    title: 'How Bunny Helps Long-Distance Couples Share the Everyday',
    metaDescription: 'Make room for everyday connection with Bunny: a shared virtual pet, love letters, drawings and question games for couples living apart.',
    excerpt: 'The little moments matter, too. Build a shared routine with a pet, a note, a doodle and something to play between calls.',
    category: 'Long distance',
    tags: ['Long distance', 'Daily rituals'],
    readingTime: '4 min read',
    coverImage: homeImage,
    coverAlt: 'The shared home in the Bunny couples app',
    coverTone: 'peach',
    related: ['raising-a-virtual-pet-together', 'bunny-whiteboard-for-couples', 'bunny-games-questions-this-or-that'],
    Content: () => (
      <>
        <p className="lede">You can tell your partner everything about your day and still miss doing ordinary things together. Bunny gives long-distance couples a small shared space to return to: a pet to care for, a letter to open and a little game that leads to a conversation.</p>
        <h2>Make something part of both your days</h2>
        <p>When you live apart, time together often needs a calendar invitation. The everyday parts of a relationship are harder to schedule: a passing joke, a tiny favor, the feeling that someone thought of you while making breakfast. A shared ritual creates another opportunity for those moments.</p>
        <p>In Bunny, you and your partner connect your accounts in a Love Nest. You each use your own phone, but you return to the same pet and shared activities. That gives you a place to do something together even when there isn’t much news to report.</p>
        <h2>Care for a bunny across time zones</h2>
        <p>Start by choosing a name for your <Link to="/shared-pet-for-couples">shared virtual pet</Link>. Both partners can use Feed, Play and Water. Care timers are shared, so an action your partner takes changes what is ready when you visit. Basic pet care is free.</p>
        <p>One person might check in before work and the other after dinner. You don’t need matching schedules. Open the app with an internet connection to load the latest care updates, then decide what you want to do next.</p>
        <h2>Leave something for them to find</h2>
        <p>A text love letter can hold one specific detail: “I passed our favorite bakery today” or “Thank you for staying up to talk yesterday.” Bunny’s free <Link to="/love-notes-for-couples">letters stay in your mailbox</Link>, ready to read again. It’s a simple place for messages you want to come back to.</p>
        <p>With Pro, the <Link to="/drawing-widgets-for-couples">shared whiteboard</Link> adds another way to say hello. Start a doodle, leave space for your partner and see what they add. You can put the drawing on your Home Screen with Bunny’s Whiteboard widget, whose refresh timing is managed by iOS.</p>
        <h2>Have a reason to ask a different question</h2>
        <p>Some evenings, “How was your day?” has already done all it can. Try a <Link to="/couples-question-games">Who’s More Likely To? round</Link> instead. Choose a pack, answer independently and compare after you both finish. A disagreement about who would get lost on holiday can turn into a story you haven’t heard before.</p>
        <p>Travel Adventures, Foodie Fun and Random Fun are free packs. You can finish at different times, so the game can fit around a time difference as well as a shared call.</p>
        <h2>A first-week routine you can actually keep</h2>
        <ul>
          <li><strong>Start small:</strong> connect your accounts and choose the bunny’s name together.</li>
          <li><strong>Leave one detail:</strong> send a letter about something that made you think of your partner.</li>
          <li><strong>Play one round:</strong> choose a free question pack and discuss one surprising answer on your next call.</li>
          <li><strong>Keep what you enjoy:</strong> agree on a pace that feels easy for both of you.</li>
        </ul>
        <p>There’s no need to turn every visit into a task or use app activity to measure affection. The point is to have more small ways to connect alongside the calls, visits and honest conversations you already value.</p>
        <h2>What you need to get started</h2>
        <p>Both partners need a supported iPhone or iPad and their own account. One creates a Love Nest and shares the invite code; the other joins. Bunny’s interface and built-in questions are in English. Basic care, text letters and the three starter question packs are free; the whiteboard and additional packs require Pro. <Link to="/pricing">Compare free and Pro features</Link> before choosing an upgrade.</p>
      </>
    ),
  },
  {
    ...defaults,
    slug: 'bunny-whiteboard-for-couples',
    title: 'Bunny’s Shared Whiteboard: A Little Canvas for the Two of You',
    metaDescription: 'Turn Bunny’s shared whiteboard into a daily ritual with doodles, drawing games and little messages. Learn how the Pro canvas and Home Screen widget work.',
    excerpt: 'Draw a tiny hello, finish each other’s doodles, or sketch your next date. One canvas can hold a lot of personality.',
    category: 'Drawing together',
    tags: ['Drawing together', 'Bunny features'],
    readingTime: '4 min read',
    coverImage: drawingImage,
    coverAlt: 'Colorful doodles on Bunny’s shared whiteboard',
    coverTone: 'lilac',
    related: ['bunny-app-for-long-distance-couples', 'shared-drawing-apps-for-couples', 'bunny-games-questions-this-or-that'],
    Content: () => (
      <>
        <p className="lede">A drawing doesn’t have to be good to feel personal. A crooked heart, a sketch of dinner or a joke only your partner understands can make their next visit to Bunny feel like finding a little present.</p>
        <h2>One whiteboard you both contribute to</h2>
        <p>Bunny’s whiteboard is a shared, editable canvas. Connected partners open the same board and add their own strokes. You can draw during a call, or leave something for your partner to discover and finish later. The canvas is included with Bunny Pro.</p>
        <p>That shared surface is what makes it fun: a circle you draw might become a sun in your partner’s hands, then a very unlikely holiday destination when you visit again. You don’t need to agree on the finished picture before starting.</p>
        <h2>Five things to draw when you have no idea what to draw</h2>
        <ol>
          <li><strong>A half-finished creature.</strong> Draw a head or a strange pair of feet. Ask your partner to add the rest, then name your creation together.</li>
          <li><strong>Your next date.</strong> Sketch a cup, a picnic blanket or a cinema ticket. Let the drawing start a conversation about what you want to do.</li>
          <li><strong>A moment from today.</strong> Draw the snack that saved your afternoon or the weather outside your window. Add a short handwritten caption.</li>
          <li><strong>An inside joke.</strong> Recreate something only the two of you find funny. A recognizable detail is enough.</li>
          <li><strong>A drawing guessing game.</strong> Pick an object, draw it without writing its name and let your partner guess on your call. Take turns using the same canvas.</li>
        </ol>
        <p>These are activities you can invent around the whiteboard, so you can change the rules to suit yourselves. For more starting points, see our <Link to="/blog/shared-drawing-apps-for-couples">shared drawing guide</Link>.</p>
        <h2>How to make your first shared drawing</h2>
        <p>Install Bunny on both devices, create an account each and connect with a Love Nest invite code. With Pro, open Doodles, select a brush color and size, and draw a small shape. Completed strokes save automatically. If the app reports a save error, choose Retry before closing.</p>
        <p>Your partner opens the board with an internet connection to see the drawing and add to it. Start with a small sketch on both devices so you can see how the canvas fits on each screen. Undo removes the most recent stroke on the shared canvas; clearing the board affects both of you.</p>
        <h2>Put a little of your shared world on the Home Screen</h2>
        <p>The optional Bunny Whiteboard widget displays your drawing in small, medium or large sizes. Add it through your iPhone’s Home Screen widget gallery, then tap it when you want to open the canvas and draw inside Bunny.</p>
        <p>iOS controls widget refresh timing. If the picture looks old, open Bunny and the whiteboard with an internet connection, then return to the Home Screen. The <Link to="/drawing-widgets-for-couples">whiteboard feature guide</Link> walks through setup.</p>
        <h2>Keep the board playful</h2>
        <p>The whiteboard is one changing canvas, so either partner can edit or clear it. Agree before replacing a drawing the other person loves. For words you want to keep and reread in the app, use a separate <Link to="/love-notes-for-couples">text love letter</Link> in the mailbox.</p>
        <p>You can start Bunny with free basic pet care and text letters, then choose Pro if drawing becomes something you both want. Pro offers weekly and lifetime options; <Link to="/pricing">check what each includes</Link> and review the current in-app offer.</p>
      </>
    ),
  },
  {
    ...defaults,
    slug: 'raising-a-virtual-pet-together',
    title: 'Raising a Virtual Pet Together: Small Moments of Teamwork in Bunny',
    metaDescription: 'See how caring for a shared virtual pet in Bunny can give couples a playful routine, a shared goal and something to enjoy together across the distance.',
    excerpt: 'A bunny with a name you chose together. Small care actions. A shared routine that gives you another reason to smile at each other.',
    category: 'Shared pets',
    tags: ['Shared pets', 'Connection'],
    readingTime: '4 min read',
    coverImage: petImage,
    coverAlt: 'Bunny’s virtual pet with shared Feed, Play and Water actions',
    coverTone: 'sage',
    related: ['virtual-pet-names-for-couples', 'tamagotchi-for-couples', 'bunny-app-for-long-distance-couples'],
    Content: () => (
      <>
        <p className="lede">“Did you feed our bunny?” is a small question, but the word “our” does a lot of work. A shared virtual pet gives you something to care about together, including on the days when you’re living very separate schedules.</p>
        <h2>A shared pet gives you a shared story</h2>
        <p>In Bunny, connected partners care for one virtual bunny. You share its name, mood and care timers. Both of you can feed it, play with it and give it water from your own phones. Basic bunny care is free.</p>
        <p>The first decision is a fun one: what do you call it? A ridiculous nickname, a favorite food or a reference to your first date makes the pet feel like something particular to your relationship. Try our <Link to="/blog/virtual-pet-names-for-couples">pet-name ideas</Link> if you need a starting point.</p>
        <h2>Why a little shared responsibility can feel good</h2>
        <p>Living apart can mean you mostly tell each other about things that have already happened. A pet gives you something you’re both involved in as it happens. You can choose a name together, notice how it’s doing and take a small care action that your partner can see when they visit.</p>
        <p>That can create chances to cooperate and be thoughtful. If your partner has a busy day, you can enjoy checking on the bunny during your own break. Later, the pet becomes an easy conversation starter rather than another recap of work.</p>
        <p>These are possible benefits of a shared activity, rather than a promise that an app will improve every relationship. What matters is whether both of you enjoy the routine and feel comfortable with how you use it.</p>
        <h2>Make it work across different schedules</h2>
        <p>You don’t have to care for the bunny at the same time. Open Bunny with an internet connection to load and share updates. Feed, Play and Water have separate cooldowns, and those timers belong to the shared pet. If your partner already used an action, you’ll see the same wait.</p>
        <p>Take that as a little sign that your partner visited, then see what else you feel like doing. You might send them a <Link to="/love-notes-for-couples">letter</Link> or answer a <Link to="/couples-question-games">question round</Link> while you’re there.</p>
        <h2>A gentle routine for your first few days</h2>
        <ol>
          <li><strong>Choose the name together.</strong> Each suggest three names, then talk through your favorites.</li>
          <li><strong>Try the care actions.</strong> Use an available Feed, Play or Water action and notice how the shared timers work.</li>
          <li><strong>Check in when it fits.</strong> Choose a natural moment, such as a break or the end of the day, without expecting matching visit counts.</li>
          <li><strong>Let the pet start a conversation.</strong> Invent a tiny backstory or ask what a real shared home might feel like one day.</li>
        </ol>
        <h2>Let care stay enjoyable</h2>
        <p>A virtual pet is an easy shared activity, but it doesn’t tell you whether someone loves you enough or how ready you are for a real animal. Busy days happen. Agree that missing a visit is fine, and speak directly if you need attention or support.</p>
        <p>If you enjoy having something grow alongside your routine, Bunny also has a <Link to="/shared-plant-for-couples">free shared plant</Link>. You can keep things as simple as pet care and a note, or explore other activities when you have time.</p>
        <h2>Start your shared bunny’s story</h2>
        <p>Each partner needs a supported iPhone or iPad and their own account. Create or join a Love Nest using its invite code, then visit your pet. You can use basic care without a subscription and decide later whether the <Link to="/pricing">extra Pro features</Link> fit your routine.</p>
      </>
    ),
  },
  {
    ...defaults,
    slug: 'bunny-games-questions-this-or-that',
    title: 'Bunny Games and Questionnaires: From Question Rounds to This or That',
    metaDescription: 'Explore Bunny’s 10-question couples games, from Travel Adventures and Lovey Dovey to Deep Talks. Compare answers and try this-or-that ideas for your next call.',
    excerpt: 'Ten questions, a topic you both enjoy, and a reason to keep talking. Explore packs from Foodie Fun to Deep Talks, plus this-or-that ideas for your next call.',
    category: 'Games & questions',
    tags: ['Games & questions', 'Date ideas'],
    readingTime: '4 min read',
    coverImage: gamesImage,
    coverAlt: 'The couples question pack library in Bunny',
    coverTone: 'butter',
    related: ['long-distance-relationship-games', 'questions-to-ask-long-distance-partner', 'bunny-whiteboard-for-couples'],
    Content: () => (
      <>
        <p className="lede">Sometimes the best way to start talking is to play something small. Bunny’s 10-question games give you and your boyfriend or girlfriend a topic, a choice to make and a reason to ask, “Wait, why did you pick me?”</p>
        <h2>What you can play in Bunny</h2>
        <p>Bunny’s documented question game is <Link to="/couples-question-games">Who’s More Likely To?</Link>. You choose a pack and answer each prompt with Me or My Partner. After both partners finish, the results show your choices side by side and how often you agreed.</p>
        <p>These questionnaire-style rounds are about discovering each other’s perspective. A matching answer can be funny; a different answer can be an even better opening for a story. The result gives you something to discuss, rather than a measure of how well your relationship is doing.</p>
        <h2>Choose your first question pack</h2>
        <p>Start in the Free collection with Travel Adventures, Foodie Fun or Random Fun. Choose the theme that matches your mood: a conversation about trips, an excuse to talk about food or a mix of topics. Additional packs, including Lovey Dovey, require Pro.</p>
        <h3>Explore the question-game topics</h3>
        <p>Each of these games has 10 questions. Pick a familiar theme for an easy start, or try a different topic when you want to move beyond your usual conversation.</p>
        <ul>
          <li>Travel Adventures</li>
          <li>Foodie Fun</li>
          <li>Random Fun</li>
          <li>Lovey Dovey</li>
          <li>Dating Spicy</li>
          <li>Daily Life</li>
          <li>Social Butterfly</li>
          <li>Tech and Screen Time</li>
          <li>Money and Shopping</li>
          <li>Deep Talks</li>
          <li>Future us</li>
          <li>Hot Takes</li>
        </ul>
        <p>You could start with Foodie Fun on a relaxed evening, choose Travel Adventures before planning a visit, or save Deep Talks and Future us for a call when you both have more time. Check the pack’s access label in the app before starting.</p>
        <p>You can also keep the game short by agreeing to talk about just one surprising result afterward. There’s no need to turn a light evening activity into a long discussion unless you both want to.</p>
        <h2>How a round works on two phones</h2>
        <ol>
          <li>Connect your accounts with a Love Nest invite code.</li>
          <li>Open Games, choose a question pack and tap Let’s play.</li>
          <li>Answer Me or My Partner. Your partner opens the same pack and continues the round on their own device.</li>
          <li>Finish on both devices, then compare the revealed answers together.</li>
        </ol>
        <p>Answers are saved so you can continue an unfinished round with an internet connection. If you finish first, you’ll see a waiting screen until your partner finishes. There is one active round for the couple; finish it before starting a different pack.</p>
        <h2>Turn a result into a better conversation</h2>
        <p>Each person answers from their own point of view. If you select Me and your partner selects My Partner, you have both picked you. Once you see the results, ask for the memory or example behind an answer.</p>
        <p>Try “What made you think of that?” or “When have I done that?” rather than trying to win the disagreement. You may discover a habit you never noticed, or find that you were remembering two completely different holidays.</p>
        <h2>Try a this-or-that round on your next call</h2>
        <p>You can extend game night with the conversation prompts below. These are ideas to play aloud or exchange in a letter, separate from Bunny’s documented in-app Who’s More Likely To? packs. Each choose an option, then explain your choice.</p>
        <ul>
          <li>Sunrise walk or midnight drive?</li>
          <li>Cook together or try a new restaurant?</li>
          <li>Plan every detail or take a spontaneous trip?</li>
          <li>Beach weekend or mountain cabin?</li>
          <li>A handwritten letter or a surprise doodle?</li>
          <li>Stay in with a film or head out for an adventure?</li>
        </ul>
        <p>Add one question that connects the answer to you as a couple: “Which would you pick for our next visit?” You’ve turned a quick choice into an idea for time together.</p>
        <h2>Build a little game night around it</h2>
        <p>Start with a free question pack, discuss a few results and then invent a drawing guessing game on the <Link to="/drawing-widgets-for-couples">Pro whiteboard</Link>. You can also check on your <Link to="/shared-pet-for-couples">shared bunny</Link> before saying goodnight. Those are different ways to spend a few playful minutes together without planning a whole event.</p>
        <p>Both partners need a supported iPhone or iPad. The interface and built-in questions are in English. <Link to="/pricing">See which features are free</Link> and check the in-app offer if you want more packs.</p>
      </>
    ),
  },
];
