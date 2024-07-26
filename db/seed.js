
const { prisma } = require("./index.js");

const clearTables = async () => {
  try {
    await prisma.$executeRaw`TRUNCATE TABLE "Movie" RESTART IDENTITY CASCADE;`;
  } catch (error) {
    console.error('Error clearing tables:', error);
    throw error;
  }
};

const seedMovies = async () => {
  const moviesArr = []
  try {
    // Create movie record
    const movie1 = await prisma.movie.create({
      data: {
        title: 'Taxi Driver',
        releaseYear: 1976,
        genre: ['drama', 'neo-noir', 'suspense', 'action', 'crime film', 'mystery', 'psychological thriller', 'classic'],
        director: 'Martin Scorsese',
        writer: 'Paul Schrader',
        actors: ['Robert DeNiro', 'Jodie Foster', 'Cybill Shepherd'],
        plot: `Suffering from insomnia, disturbed loner Travis Bickle (Robert De Niro) takes a job as a New York City cabbie, haunting the streets nightly, growing increasingly detached from reality as he dreams of cleaning up the filthy city. When Travis meets pretty campaign worker Betsy (Cybill Shepherd), he becomes obsessed with the idea of saving the world, first plotting to assassinate a presidential candidate, then directing his attentions toward rescuing 12-year-old prostitute Iris (Jodie Foster).`,
        rating: 'R',
        musicBy: 'Bernard Hermann',
        runTimeMins: 114,
      },
    });
    moviesArr.push(movie1);
    const movie2 = await prisma.movie.create({
      data: {
        title: 'Cool Hand Luke',
        releaseYear: 1967,
        genre: ['drama', 'crime', 'adventure', 'character study', 'crime film', 'classic'],
        director: 'Stuart Rosenberg',
        writer: 'Frank R. Pierson',
        actors: ['Paul Newman', 'George Kennedy', 'Joanne Woodward', 'Strother Martin', 'Jo Van Fleet', 'Harry Dean Stanton'],
        plot: `Luke Jackson is a decorated war hero who finds himself sentenced to a chain gang for a relatively minor crime. As he challenges the oppressive system of the prison camp, his defiant attitude and refusal to conform to the rules make him a legend among his fellow inmates. The film explores themes of individualism, rebellion, and the human spirit under oppressive conditions.`,
        rating: 'PG',
        musicBy: 'Lalo Schifrin',
        runTimeMins: 126,
      },
    });
    moviesArr.push(movie2);

    const movie3 = await prisma.movie.create({
      data: {
        title: 'Reservoir Dogs',
        releaseYear: 1992,
        genre: ['thriller', 'crime'],
        director: 'Quentin Tarantino',
        writer: 'Quentin Tarantino',
        actors: ['Harvey Keitel', 'Tim Roth', 'Michael Madsen', 'Chris Penn', 'Steve Buscemi', 'Lawrence Tierney', 'Quentin Tarantino'],
        plot: `The film revolves around a group of criminals who are brought together to carry out a diamond heist. However, the job goes terribly wrong, leading to a bloody confrontation among the members of the gang. As they try to figure out who among them is the informant, trust erodes, and paranoia takes hold.`,
        rating: 'R',
        musicBy: 'Various Artists',
        runTimeMins: 99,
      },
    });
    moviesArr.push(movie3);
  } catch (error) {
    console.error('Error seeding movie:', error);
  } finally {
    await prisma.$disconnect();
  }
};

const main = async () => {
  console.log('CLEARING TABLES')
  await clearTables()
  console.log('TABLES CLEARED')
  console.log('SEEDING MOVIES')
  await seedMovies();
  console.log('MOVIES SEEDED')
}

main()