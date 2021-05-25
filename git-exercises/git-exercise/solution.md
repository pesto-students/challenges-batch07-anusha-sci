# Git Excercise insights
# 1.) I observed that on doing a commit a new object is created inside .git/objects folder and thats how git keeps track of all new commits

# 3.) In the staging area the files that are committed are also present.

# 4.) With git reset the head basically points to the last commit

# 5.) By stash we can save the uncommitted changes and can apply them back whenever needed to the current branch

# 6.) By lightweight tag we can simply point to a specific commit in git history and can be done using git tag <name of tag>. To check whether it is pointing we can use git show <name of tag>

# 7.) By annotated tag we can add additional information like the tagger name or meta data        git tag -a <name of tag> -m <info>. By using git show <name of tag> we can see additional information as well.

# 8.) Created a new branch features and merged it in solutions branch finally the head was pointing to the feature branch as confirmed by the git log.

# 9.) Created another branch from solutions branch and modified the number of dots in same line in the branch feature2 and features. Merged features into solutions successfully. When tried to merge feature2 in solutions I got conflicts as same line was modified in both the branches. Fixed the conflicts in the file and commited and then merge was successful.

#  in git everything is stored as key and value. blob is the value
