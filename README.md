<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Quick Start Dice Sample Capsule</h1>
</p>

## Overview

This capsule provides companion code to the Bixby [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start). The capsule simulates throwing dice. Throw any number of dice and choose how many sides the dice have. The capsule demonstrates use of [Concepts](https://bixbydevelopers.com/dev/docs/dev-guide/developers/modeling.modeling-concepts) and [Actions](https://bixbydevelopers.com/dev/docs/dev-guide/developers/modeling.modeling-actions).

**Note:** This capsule is meant to be used with the [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start), which teaches you how to add training. Therefore, you cannot use natural language initially. However, you can use the following intent in the Simulator to test the capsule out-of-the-box:

```
// Give two values (number of dice and number of sides) with the
// goal of rolling dice
intent {
  goal: example.dice.RollResultConcept
  value: example.dice.NumSidesConcept (6)
  value: example.dice.NumDiceConcept (2)
}
```

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!
* [Bixby News, Blogs and Tutorials](https://bixby.developer.samsung.com/) - Bixby News, Tutorials, Blogs and Events

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Bixby Videos
* [Bixby Developers YouTube Channel](https://www.youtube.com/c/bixbydevelopers) - Tutorial videos, Presentations, Capsule Demos and more

### Bixby Podcast
* [Bixby Developers Chat](http://bixbydev.buzzsprout.com/) - Voice, Conversational AI and Bixby discussions 

### Bixby on Social Media
* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers)
* [Instagram](https://www.instagram.com/bixbydevelopers/)

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
