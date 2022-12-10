import RecipeCard from '../components/Recipes/Card';
import RecipesContainer from '../components/Recipes/Container';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.base}>
      <RecipesContainer>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </RecipesContainer>
    </div>
  );
}
